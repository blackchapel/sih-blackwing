const express = require("express");
const Tender = require('./../models/tender.schema');
const Bid = require('./../models/bid.schema');

const router = new express.Router();

router.get('/', async (req, res) => {

    const tender = await Tender.findById(req.body.tenderid);
    const bids = await Bid.find({tenderid: req.body.tenderid});
    const tenderboq = tender.boq;
    

    let requirements = [], responses = [];
    for (let i = 0; i < tenderboq.length; i++) {
        let obj = {
            sl_no: i+1,
            Estimated_Rate: tenderboq.rate,
            prefered_models: tenderboq.preferredmodels
        };
        requirements.push(obj);
    }

    for (let i = 0; i < bids.length; i++) {
        let obj = {
            bidder_id: bids[i].bidderid,
            bidder_offer: bids[i].boq
        };
        responses.push(obj);
    }

    let data = {
        requirement: requirements,
        response: responses
    };

    res.send(data);
})

module.exports = router;