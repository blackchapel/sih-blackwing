const Bid = require('./../models/bid.schema');
const Tender = require('./../models/tender.schema');
const { ipfs } = require('./../utilities/utils');

const bidApply = async (req) => {
    let result;
    let fileobjs = [];//, filenames = [];
    if (req.files) {
        for (let file of req.files) {
            let url = await ipfs(file);
            let obj = {
                name: file.originalname,
                url: url
            };
            // fileurls.push(url);
            // filenames.push();
            fileobjs.push(obj);
        }
    }

    let bidObj = {
        bidderid: req.user.parentid,
        files: fileobjs,
        tenderid: req.body.tenderid,
        status: 'APPLIED',
        boq: req.body.boq
    };

    bidObj = new Bid(bidObj);
    const bid = await bidObj.save();

    let tender = await Tender.findById(req.body.tenderid);
    let array = tender.bidids;
    array.push(bid._id);
    await Tender.findByIdAndUpdate(req.body.tenderid, {bidids: array});

    result = {
        message: 'Bid applied successfully',
        data: bidObj
    };
    return result;   
}

const bidStatusChange = async (req) => {
    let result;

    const bid = await Bid.findByIdAndUpdate(req.params.id, {status: req.params.id});

    result = {
        message: 'Bid status changed successfully',
        data: bid
    };
    return result;
}

module.exports = {
    bidApply,
    bidStatusChange
};