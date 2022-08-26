const Department = require('../models/department.schema');
const Grievance = require('../models/grievance.schema');
const Tender = require('../models/tender.schema');

const departmentCreate = async (req) => {
    let result;
    let newDepartment = new Department(req.body);

    newDepartment = await newDepartment.save();

    result = {
        message: 'Department created successfully',
        data: {
            newDepartment
        }
    };
    return result;
}

const departmentUpdate = async (req) => {
    let result;

    const department = await Department.findByIdAndUpdate(req.params.id, req.body);

    if (!department) {
        result = {
            message: 'Department not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Department updated successfully',
        data: department
    };
    return result;
}

const departmentDelete = async (req) => {
    let result;

    const department = await Department.findByIdAndUpdate(req.params.id, { isDeleted: true });

    if (!department) {
        result = {
            message: 'Department not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Department deleted successfully',
        data: department
    };
    return result;
};

const departmentGrievances = async (req) => {
    let result;

    const grievances = await Grievance.find({departmentid: req.user.parentid});

    result = {
        message: 'Grievance List for Department',
        data: {
            grievances
        }
    };
    return result;
};

const updateDepartmentGrievance = async (req) => {
    let result;

    const grievance = await Grievance.findByIdAndUpdate(req.params.id, {status: 'addressed'});

    result = {
        message: 'Grievance Status Updated',
        data: {
            grievance
        }
    };
    return result;
};

const departmentTendersList = async (req) => {
    let result, tenders;
    const queryObj = { isDeleted: false, departmentid: req.user.parentid };

    let aggregationPipeline = [];

    if (query.tendertype && !query.tendertype.includes('undefined')) {
        queryObj['tendertype'] = { $in: query.tendertype.split(",") };
    }

    if (query.tendercategory && !query.tendercategory.includes('undefined')) {
        queryObj['tendercategory'] = { $in: query.tendercategory.split(",") };
    }

    if (query.status && !query.status.includes('undefined')) {
        queryObj['status'] = { $in: query.status.split(",") };
    }

    aggregationPipeline.push({ $match: queryObj });

    tenders = await Tender.aggregate(aggregationPipeline).collation({ locale: 'en_US' });

    result = {
        message: 'Tender List within department',
        data: {
            tenders
        }
    };
    return result;
};

module.exports = {
    departmentCreate,
    departmentUpdate,
    departmentDelete,
    departmentGrievances,
    updateDepartmentGrievance,
    departmentTendersList
};