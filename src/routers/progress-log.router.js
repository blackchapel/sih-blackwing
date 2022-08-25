const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createProgressLog,
    getProgressLogList
} = require('./../controllers/progress-log.controller');

const router = new express.Router();

router.get('/', [auth.verifyJwtToken, auth.userTypeBidder],getProgressLogList);

router.post('/', [auth.verifyJwtToken, auth.userTypeBidder], createProgressLog);

module.exports = router;