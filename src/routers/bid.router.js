const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    applyBid,
    changeBidStatus,
    getBidById
} = require('./../controllers/bid.controller');

const router = new express.Router();

router.post('/apply', [auth.verifyJwtToken, auth.userTypeBidder], applyBid);

router.put('/updatestatus/:id', [auth.verifyJwtToken, auth.userTypeBidder], changeBidStatus);

router.get('/:id', getBidById)

module.exports = router;