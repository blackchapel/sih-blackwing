const { decrypt } = require('./../utilities/utils');

const decryptData = () => {
    req.body = decrypt(data);
};

module.exports = decryptData;