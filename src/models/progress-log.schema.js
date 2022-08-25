const mongoose = require('mongoose');

const progressLogSchema = new mongoose.Schema({
    tenderid: {
        type: String,
        required: false
    },
    lastlog: {
        type: Date,
        required: false
    },
    nextlog: {
        type: Date,
        required: false
    },
    logs: [{
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
        file: {
            name: {
                type: String, 
                required: false
            },
            url: {
                type: String, 
                required: false
            }
        }
    }]
});

const ProgressLog = mongoose.model('progress-log', progressLogSchema);

module.exports = ProgressLog;