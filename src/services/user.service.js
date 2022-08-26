const User = require('./../models/user.schema');
const { hashPassword } = require('./../utilities/utils');
const { sendOtpByEmail, sendOtpBySms } = require('./auth.service');

const createUser = async (req, user, role) => {
    let result;
    const password = await hashPassword(req.body.password);

    let name;
    if (user.companyName) {
        name = user.companyName;
    } else {
        name = user.name;
    }

    const newUserObj = {
        parentid: user._id,
        name: name,
        email: user.email,
        mobile: user.mobile,
        role: role,
        password: password,
        istotpenabled: false,
        isEmailVerified: false,
        isMobileVerified: false
    };
    
    let newUser = new User(newUserObj);
    newUser = await newUser.save();

    const authEmailId = await sendOtpByEmail(req, newUser);
    const authSmsId = await sendOtpBySms(req, newUser);

    result = {
        newUser,
        authEmailId,
        authSmsId
    };
    return result;
};

const getUserById = async(id) => {
    let result;
    const user = await User.findById(id);

    if (!user) {
        result = {
            message: 'User not found',
            error: 404
        };
        return result
    } 

    return user;
}

module.exports =  {
    createUser,
    getUserById
};
