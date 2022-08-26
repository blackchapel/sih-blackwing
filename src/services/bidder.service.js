const Bidder = require('../models/bidder.schema');
const Bid = require('./../models/bid.schema');
const Tender = require('./../models/tender.schema');
const verifyGstin = require('./verification.service');
const { createUser } = require('./user.service');
const { encrypt, decrypt } = require('./../utilities/utils');

const bidderList = async (searchText, pageNo, pageSize) => {
    let result;
    let bidders;
    const queryObj = { isDeleted: false };

    let aggregationPipeline = [];
    let searchObj;
    let skip, limit;

    if (searchText && searchText !== 'undefined') {
        searchObj = {
            'index': 'bidder',
            'text': {
                'query': searchText,
                'path': ['companyName', 'preferenceCategory', 'registeredAddress', 'partners', 'bidderType', 'city', 'state', 'country', 'panNumber', 'gstinNumber', 'establishmentYear', 'natureOfBusiness', 'legalStatus', 'companyCategory', 'contactName']
            }
        };

        aggregationPipeline.push({ $search: searchObj });
    }

    aggregationPipeline.push({ $match: queryObj });

    if (pageNo && pageSize) {
        if (pageNo < 1 || pageSize < 1) {
            limit = pageSize;
            skip = ((pageNo - 1) * pageSize);
            aggregationPipeline.push({ $skip: skip });
            aggregationPipeline.push({ $limit: limit });
        }
    }

    bidders = await Bidder.aggregate(aggregationPipeline).collation({ locale: 'en_US' });

    result = {
        message: 'Bidder List',
        data: {
            bidders
        }
    };
    return result;
}

const bidderById = async (req) => {
    let result;

    const bidder = await Bidder.findById(req.params.id);

    if (!bidder) {
        result = {
            message: 'Bidder not found',
            error: 404
        }
        return result;
    }

    const data = {
        bidder
    };

    const encryptedData = encrypt(data);

    result = {
        message: 'Bidder details',
        data: encryptedData
    };
    return result;
}

const bidderCreate = async (req) => {
    let result;
    req.body.data = decrypt(req.body.data);
    let newBidder = new Bidder(req.body.data);
    
    let information = true;
    const panVerification = 1;
    // const gstinVerfication = await verifyGstin(newBidder.gstinNumber);
    const gstinVerfication = 1;

    if (!panVerification) {
        result = {
            message: 'Enter correct PAN',
            error: 400
        }
        information = false;
    }
    if (!gstinVerfication) {
        result = {
            message: 'Enter correct GSTIN',
            error: 400
        }
        information = false;
    }
    if (!panVerification && !gstinVerfication) {
        result = {
            message: 'Enter correct PAN & GSTIN',
            error: 400
        }
        information = false;
    }
    if (!information) {
        return result;
    }

    newBidder = await newBidder.save();

    const newUser = await createUser(req, newBidder, 'BIDDER');

    newBidder.userid = newUser._id;
    await newBidder.save();

    const data = {
        authEmailId: newUser.authEmailId,
        authSmsId:  newUser.authSmsId,
        newBidder,
        newUser:  newUser.newUser
    };

    const encryptedData = encrypt(data);

    result = {
        message: 'Bidder successfully created',
        data: encryptedData
    };
    return result;
};

const bidderUpdate = async (req) => {
    let result;

    req.body.data = decrypt(req.body.data);

    const bidder = await Bidder.findByIdAndUpdate(req.params.id, req.body.data);

    if (!bidder) {
        result = {
            message: 'Bidder not found',
            error: 404
        }
        return result;
    }

    const data = {
        bidder
    };

    const encryptedData = encrypt(data);

    result = {
        message: 'Bidder updated successfully',
        data: encryptedData
    };
    return result;
};

const bidderDelete = async (req) => {
    let result;

    const bidder = await Bidder.findByIdAndUpdate(req.params.id, { isDeleted: true });

    if (!bidder) {
        result = {
            message: 'Bidder not found',
            error: 404
        }
        return result;
    }

    const data = {
        bidder
    };

    const encryptedData = encrypt(data);

    result = {
        message: 'Bidder deleted successfully',
        data: encryptedData
    };
    return result;
};

const getTendersAlloted = async (req) => {
    let result;
    const bidder = await Bidder.findById(req.params.id);

    if (!bidder) {
        result = {
            message: 'Bidder not found',
            error: 404
        };
    }

    let aggregationPipeline = [];
    const queryObj = {
        status: 'FINALIZED'
    };
    aggregationPipeline.push({ $match: queryObj });

    const allotedBids = await Bid.aggregate(aggregationPipeline);

    const allotedTenders = [];
    for await (const bid of allotedBids) {
        let tender = await Tender.findById(bid.tenderid);
        allotedTenders.push(tender);
    }

    const data = {
        allotedTenders
    };
    const encryptedData = encrypt(data);

    result = {
        message: 'Alloted tender list',
        data: encryptedData
    };
    return result;
}

const getTendersAllottedSelected = async (req) => {
    let result;
    const bidder = await Bidder.findById(req.params.id);

    if (!bidder) {
        result = {
            message: 'Bidder not found',
            error: 404
        };
    }

    let aggregationPipeline = [];
    const queryObj = {
        status: 'FINALIZED' | 'ACCEPTED'
    };
    aggregationPipeline.push({ $match: queryObj });

    const allotedBids = await Bid.aggregate(aggregationPipeline);

    const allotedTenders = [];
    for await (const bid of allotedBids) {
        let tender = await Tender.findById(bid.tenderid);
        allotedTenders.push(tender);
    }

    const data = {
        allotedTenders
    };
    const encryptedData = encrypt(data);

    result = {
        message: 'Alloted & selected tender list',
        data: encryptedData
    };
    return result;
}

module.exports = {
    bidderList,
    bidderById,
    bidderCreate,
    bidderUpdate,
    bidderDelete,
    getTendersAlloted,
    getTendersAllottedSelected
};