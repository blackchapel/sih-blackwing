const {
    bidApply,
    bidStatusChange
} = require('./../services/bid.service');

const applyBid = async (req, res) => {
    try {
        let result = await bidApply(req);

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
}

const changeBidStatus = async (req, res) => {
    try {
        let result = await bidStatusChange(req);

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

module.exports = {
    applyBid,
    changeBidStatus
};