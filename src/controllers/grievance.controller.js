const {
    grievanceList,
    grievanceCreate
} = require('./../services/progress-log.service');

const createGrievance = async (req, res) => {
    try {
        let result = await grievanceCreate(req);

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

const listGrievance = async (req, res) => {
    try {
        console.log(req.body);
        let result = await grievanceList(req);

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
    createGrievance,
    listGrievance
};