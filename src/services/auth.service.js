const Auth = require('./../models/auth.schema');
const User = require('./../models/user.schema');
const  { generateOtp, sendEmail, sendSms, validatePassword } = require('./../utilities/utils');
const speakeasy = require('speakeasy');
const jwt = require('jsonwebtoken');

const sendOtpByEmail = async (req, user) => {
    const milliseconds = new Date().getTime();
    const lessMinute = milliseconds - (1 * 60 * 1000);
    const lessMinuteDate = new Date(lessMinute);

    const otp = generateOtp(6);
    const emailSubject = 'Verification Code';
    const emailBody = `Your verification code is ${otp}`;
    await sendEmail(user.email, emailSubject, emailBody);

    const auth = await new Auth({
        user: {
            id: user._id,
            email: user.email
        },
        token: otp,
        tokenType: 'EMAIL OTP',
        expireAt: lessMinuteDate,
        lastAccess: new Date(),               
        clientIPAddress: req.connection.remoteAddress,
        userAgent: req.headers['user-agent']
    }).save();

    return auth._id;
};

const sendOtpBySms = async (req, user) => {
    const milliseconds = new Date().getTime();
    const lessMinute = milliseconds - (1 * 60 * 1000);
    const lessMinuteDate = new Date(lessMinute);

    const otp = generateOtp(6);
    const message = `Your verification code is ${otp}`;
    await sendSms(message, user.mobile);

    const auth = await new Auth({
        user: {
            id: user._id,
            mobile: user.mobile
        },
        token: otp,
        tokenType: 'SMS OTP',
        expireAt: lessMinuteDate,
        lastAccess: new Date(),               
        clientIPAddress: req.connection.remoteAddress,
        userAgent: req.headers['user-agent']
    }).save();

    return auth._id;
};

const emailAndMobileVerification = async (req) => {
    let result;
    const authEmail = await Auth.findById(req.body.authEmailId);
    if (!authEmail) {
        result = {
            message: 'Email otp not found',
            error: true
        };
        return result;
    }

    const authMobile = await Auth.findById(req.body.authMobileId);
    if (!authMobile) {
        result = {
            message: 'Mobile otp not found',
            error: true
        };
        return result;
    }

    let user = await User.findById(authEmail.user.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: true
        };
        return result;
    }

    if (authEmail.token !== req.body.emailOtp) {
        result = {
            message: 'Incorrect email otp',
            error: true
        };
        return result;
    } 

    if (authMobile.token !== req.body.mobileOtp) {
        result = {
            message: 'Incorrect mobile otp',
            error: true
        };
        return result;
    } 

    user = await User.findByIdAndUpdate(user.id, { isemailverified: true, ismobileverified: true });

    result = {
        message: 'Verifcation Successful',
        data: {
            user
        }
    };
    return result;
};

const totpSecretGenerate = async (req) => {
    let result;
    let user = await User.findById(req.params.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: 404
        };
        return result;
    }
    
    const tempSecret = speakeasy.generateSecret();
    
    user = await User.findByIdAndUpdate(req.params.id, { totpsecret: tempSecret.base32 });

    result = {
        message: 'Totp Secret generated',
        data:  {
            url: tempSecret.otpauth_url
        }
    }
    return result
};

const totpEnable = async (req) => {
    let result;
    let user = await User.findById(req.params.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: 404
        };
        return result;
    }

    const verify = speakeasy.totp.verify({
        secret: user.totpsecret,
        encoding: 'base32',
        token: req.body.totp
    });

    if (!verify) {
        result = {
            message: 'Invalid totp',
            error: 400
        };
        return result;
    }
    
    user = await User.findByIdAndUpdate(req.params.id, { istotpenabled: true });
    result = {
        message: 'Totp verified',
        data: {
            user
        }
    };
    return result;
};

const totpTokenVerify = async (req) => {
    let result;
    const user = await User.findById(req.params.id);
    if (!user) {
        result = {
            message: 'User not found',
            error: 404
        };
        return result;
    }

    const verify = speakeasy.totp.verify({
        secret: user.totpsecret,
        encoding: 'base32',
        token: req.body.totp
    });

    if (!verify) {
        result = {
            message: 'Invalid totp',
            error: 400
        };
        return result;
    }

    const { jwtToken, expireDate } = await generateBearerToken(req, user);

    result = {
        message: 'Totp verified',
        data: {
            jwtToken,
            expireDate,
            user
        }
    };
    return result;
};

const loginUser = async (req) => {
    let result;
    const user = await User.findOne({ email: req.body.email, isDeleted: false });

    if (!user) {
        result = {
            message: 'Incorrect email',
            error: 404
        };
        return result;
    }

    if (!validatePassword(req.body.password, user.password)) {
        result = {
            message: 'Incorrect password',
            error: 400
        };
        return result;
    }

    if (user.istotpenabled) {
        result = {
            message: 'Please enter totp',
            data: {
                user
            }
        };
        return result;
    }

    const { jwtToken, expireDate } = await generateBearerToken(req, user);

    result = {
        message: 'Bearer token generated',
        data: {
            jwtToken,
            expireDate,
            user
        }
    }
    return result;
};

const generateBearerToken = async (req, user) => {
    const jwtToken = jwt.sign({
        userId: user._id,
        parentId: user.parentid,
        name: user.name,
        email: user.email,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });

    const expireDate = new Date();
    expireDate.setHours(expireDate.getHours() + 24);

    await new Auth({
        token: jwtToken,
        user: {
            id: user._id,
            email: user.email,
            mobile: user.mobile
        },
        userAgent: req.headers['user-agent'],
        tokenType: 'BEARER',
        clientIPAddress: req.connection.remoteAddress,
        expireAt: expireDate,
        lastAccess: new Date()
    }).save();

    return {
        jwtToken,
        expireDate
    };
}

module.exports = {
    sendOtpByEmail,
    sendOtpBySms,
    emailAndMobileVerification,
    totpSecretGenerate,
    totpEnable,
    totpTokenVerify,
    loginUser
};