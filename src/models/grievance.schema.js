const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
    tenderid: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false,
        enum: ['pending', 'addressed']
    },
    departmentid: {
        type: String,
        required: false
    },
});

const Grievance = mongoose.model('grievance', grievanceSchema);

module.exports = Grievance;