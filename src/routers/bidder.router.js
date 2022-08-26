const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const { 
    createBidder, 
    getBidderById, 
    getBidderList, 
    updateBidder, 
    deleteBidder,
    getAllotedTenders,
    getAllotedSelectedTenders
} = require('./../controllers/bidder.controller');

const router = new express.Router();

router.get('/', [auth.verifyJwtToken, auth.userTypeAdmin],getBidderList);

router.get('/:id', getBidderById);

router.post('/', createBidder);

router.put('/:id', [auth.verifyJwtToken, auth.userTypeBidder], updateBidder);

router.delete('/:id', [auth.verifyJwtToken, auth.userTypeBidder], deleteBidder);

router.get('/', [auth.verifyJwtToken, auth.userTypeBidder],getBidderList);

router.get('/allotted/:id', [auth.verifyJwtToken, auth.userTypeBidder], getAllotedTenders);

router.get('/applied/:id', [auth.verifyJwtToken, auth.userTypeBidder], getAllotedSelectedTenders);

module.exports = router;