const mongoose = require('mongoose');

const progressLogSchema = new mongoose.Schema({
    bidid: {
        type: String,
        required: true
    },
    tenderid: {
        type: String,
        required: true
    },
    lastlog: {
        type: Date,
        required: false
    },
    nextlog: {
        type: Date,
        required: false
    },
    log: {
        logdate: {
            type: Date,
            required: false
        },
        duedate: {
            type: Date,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        files: [{
            name: {
                type: String, 
                required: false
            },
            url: {
                type: String, 
                required: false
            }
        }]
    }
});

const ProgressLog = mongoose.model('progress-log', progressLogSchema);

module.exports = ProgressLog;