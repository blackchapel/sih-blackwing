const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    occurredAt: {
        type: Date,
        required: true
    },
    event: {
        type: String,
        required: false,
        enum: [
            'Log In',
            'Tender Created'
        ]
    },
    description: {
        event: {
            type: String,
            required: false
        }
    }
});

const ActivityLog = mongoose.model('activity-log', activityLogSchema);

module.exports = ActivityLog;