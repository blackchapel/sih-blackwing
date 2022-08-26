const {
    departmentCreate,
    departmentUpdate,
    departmentDelete,
    departmentGrievances,
    updateDepartmentGrievance,
    departmentTendersList
} = require('./../services/department.service');

const createDepartment = async (req, res) => {
    try {
        let result = await departmentCreate(req);

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
};

const updateDepartment = async (req, res) => {
    try {
        let result = await departmentUpdate(req);

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const deleteDepartment = async (req, res) => {
    try {
        let result = await departmentDelete(req);

        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({
            result: {
                message: error.message
            }
        });
    }
};

const departmentGrievanceList = async (req, res) => {
    try {
        
        let result = await departmentGrievances(req);

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

const departmentGrievanceUpdate = async (req, res) => {
    try {
        
        let result = await updateDepartmentGrievance(req);

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

const getDepartmentTenders = async (req, res) => {
    try {
        
        let result = await departmentTendersList(req);

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
    createDepartment,
    updateDepartment,
    deleteDepartment,
    departmentGrievanceList,
    departmentGrievanceUpdate,
    getDepartmentTenders
};