const { 
    bidderList, 
    bidderById, 
    bidderCreate, 
    bidderUpdate, 
    bidderDelete,
    getTendersAlloted,
    getTendersAllottedSelected
} = require('./../services/bidder.service');

const createBidder = async (req, res) => {
    try {
        let result = await bidderCreate(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(201).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const getBidderById = async (req, res) => {
    try {
        let result = await bidderById(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
}

const getBidderList = async (req, res) => {
    try {
        let result = await bidderList(req.query.serchText, req.headers.pageNo, req.headers.pageSize);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const updateBidder = async (req, res) => {
    try {
        let result = await bidderUpdate(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const deleteBidder = async (req, res) => {
    try {
        let result = await bidderDelete(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const getAllotedTenders = async (req, res) => {
    try {
        let result = await getTendersAlloted(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const getAllotedSelectedTenders = async (req, res) => {
    try {
        let result = await getTendersAllottedSelected(req);

        if (result.error) {
            res.status(result.error).json({ result });
            return;
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

module.exports = {
    createBidder,
    getBidderById,
    getBidderList,
    updateBidder,
    deleteBidder,
    getAllotedTenders,
    getAllotedSelectedTenders
};