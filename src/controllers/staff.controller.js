const { 
    staffList, 
    staffById, 
    staffCreate, 
    staffUpdate, 
    staffDelete 
} = require('./../services/staff.service');

const createStaff = async (req, res) => {
    try {
        let result = await staffCreate(req);

        if (result.error) {
            res.status(400).json({ result });
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

const getStaffById = async (req, res) => {
    try {
        let result = await staffById(req);

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

const getStaffList = async (req, res) => {
    try {
        let result = await staffList(req);

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

const updateStaff = async (req, res) => {
    try {
        let result = await staffUpdate(req);

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

const deleteStaff = async (req, res) => {
    try {
        let result = await staffDelete(req);

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
    createStaff,
    getStaffById,
    getStaffList,
    updateStaff,
    deleteStaff
};