const {
    progressLogList,
    progressLogCreate
} = require('./../services/progress-log.service');

const createProgressLog = async (req, res) => {
    try {
        let result = await progressLogCreate(req);

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

const getProgressLogList = async (req, res) => {
    try {
        console.log(req.body);
        let result = await progressLogList(req);

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
    createProgressLog,
    getProgressLogList
};