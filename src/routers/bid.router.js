const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    applyBid,
    changeBidStatus
} = require('./../controllers/bid.controller');

const router = new express.Router();

router.post('/apply', [auth.verifyJwtToken, auth.userTypeBidder], applyBid);

router.put('updatestatus/:id', [auth.verifyJwtToken, auth.userTypeBidder], changeBidStatus);

module.exports = router;