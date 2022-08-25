const Staff = require('./../models/staff.schema');
const { createUser } = require('./user.service');
const { hashPassword } = require('./../utilities/utils');

const staffList = async (req) => {
    let result;
    let staffs;

    const staff = await Staff.findById(req.parentId);
    const queryObj = { isdeleted: false, departmentid: staff.departmentid };

    let aggregationPipeline = [];

    aggregationPipeline.push({ $match: queryObj });

    staffs = await Staff.aggregate(aggregationPipeline).collation({ locale: 'en_US' });

    result = {
        message: 'Staff List',
        data: {
            staffs
        }
    };
    return result;
}

const staffById = async (req) => {
    let result;

    const staff = await Staff.findById(req.params.id);

    if (!staff) {
        result = {
            message: 'Staff not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Staff details',
        data: {
            staff
        }
    };
    return result;
}

const staffCreate = async (req) => {
    let result;
    password = hashPassword(req.body.password);
    const staff = await Staff.findById(req.parentId);
    let newStaff = new Staff({
        departmentid: staff.departmentid,
        title: req.body.title,
        name: req.body.name,
        dateofbirth: req.body.dateofbirth,
        email: req.body.email,
        secretariatdepartment: req.body.secretariatdepartment,
        organizationname: req.body.organizationname,
        designation: req.body.designation,
        address: req.body.address,
        mobile: req.body.mobile,
        role: req.body.role,
        password: req.body.password
    });
    await newStaff.save();

    const newUser = await createUser(req, newStaff, req.body.role);

    newStaff.userid = newUser._id;
    await newStaff.save();

    result = {
        message: 'Staff successfully created',
        data: { 
            authEmailId: newUser.authEmailId,
            authSmsId:  newUser.authSmsId,
            newStaff,
            newUser:  newUser.newUser
        }
    };
    return result;
};

const staffUpdate = async (req) => {
    let result;

    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body);

    if (!staff) {
        result = {
            message: 'Staff not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Staff updated successfully',
        data: staff
    };
    return result;
};

const staffDelete = async (req) => {
    let result;

    const staff = await Staff.findByIdAndUpdate(req.params.id, { isDeleted: true });

    if (!staff) {
        result = {
            message: 'Staff not found',
            error: 404
        }
        return result;
    }

    result = {
        message: 'Staff deleted successfully',
        data: staff
    };
    return result;
};

module.exports = {
    staffList,
    staffById,
    staffCreate,
    staffUpdate,
    staffDelete
};