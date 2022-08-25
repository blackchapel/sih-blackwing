const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createProgressLog,
    getProgressLogList
} = require('./../controllers/progress-log.controller');
const decryptData = require('./../middlewares/decrypt.middleware');
const upload = require('./../utilities/multer');

const router = new express.Router();

router.get('/', [auth.verifyJwtToken, auth.userTypeBidder], getProgressLogList);

router.post('/', [auth.verifyJwtToken, auth.userTypeBidder], upload.single('progresslogfile'), createProgressLog);

module.exports = router;