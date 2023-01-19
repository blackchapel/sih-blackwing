const express = require("express");
const { encrypt, decrypt } = require('../utilities/utils');

const router = new express.Router();

router.get('/encryption', (req, res) => {
    try {
        const encryptData = encrypt(req.body);
        res.status(200).json({
            encryptData
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get('/decryption', (req, res) => {
    try {
        const decryptData = decrypt(req.body.data);
        res.status(200).json({
            decryptData
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;