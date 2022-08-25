const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    tenderids: [{
        type: String,
        required: true
    }],
    staffids: [{
        type: String,
        required: true
    }],
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: false
    },
    secretariatDepartment: {
        type: String,
        required: false
    },
    noOfTenders: {
        type: Number,
        required: false
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false
    }
});

const Department = mongoose.model('department', departmentSchema);

module.exports = Department;