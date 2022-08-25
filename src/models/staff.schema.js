const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
    {
        departmentid: {
            type: String,
            required: true
        },
        userid: {
            type: String,
            required: false
        },
        title: {
            type: String,
            require: true,
            enum: ['Mrs', 'Mr', 'Ms', 'Dr', 'Sri']
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        dateofbirth: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please enter a valid email address']
        },
        secretariatdepartment: {
            type: String
        },
        organizationname: {
            type: String
        },
        designation: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: ['DEPARTMENT_HEAD', 'DEPARTMENT_STAFF']
        },
        isdeleted: {
            type: Boolean,
            default: false
        }
    }
)

const Staff = mongoose.model('staff', staffSchema);

module.exports = Staff;