const { 
    sendOtpByEmail,
    sendOtpBySms,
    emailAndMobileVerification, 
    totpSecretGenerate, 
    totpEnable, 
    totpTokenVerify, 
    loginUser 
} = require('./../services/auth.service');
const { getUserById } = require('./../services/user.service');

const generateEmailAndMobileOtp = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);

        if (user.error) {
            res.status(user.error).json({ user });
        }

        const authEmailId = await sendOtpByEmail(req, user);
        const authSmsId = await sendOtpBySms(req, user);

        result = { 
            message: 'OTP sent',
            data: {
                authEmailId,
                authSmsId,
                user
            }
        };
        
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
}

const verifyEmailAndMobile = async (req, res) => {
    try {
        const result = await emailAndMobileVerification(req);

        if (result.error) {
            res.status(400).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const generateTotpSecret = async (req, res) => {
    try {
        const result = await totpSecretGenerate(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const enableTotp = async (req, res) => {
    try {
        const result = await totpEnable(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const verifyTotpToken = async (req, res) => {
    try {
        const result = await totpTokenVerify(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const login = async (req, res) => {
    try {
        let result = await loginUser(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

module.exports =  {
    generateEmailAndMobileOtp,
    verifyEmailAndMobile,
    generateTotpSecret,
    enableTotp,
    verifyTotpToken,
    login
};