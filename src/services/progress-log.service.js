const ProgressLog = require('../models/progress-log.schema');
const Tender = require('../models/tender.schema');
const { encrypt, decrypt, ipfs } = require('../utilities/utils');

const progressLogList = async (req) => {
    let result;
    console.log(req.body);
    const logs = await ProgressLog.find({tenderid: req.body.tenderid});

    result = {
        message: 'Progress Logs',
        data: {
            logs
        }
    };
    return result;

}

const progressLogCreate = async (req) => {
    let result, fileurl;
    req.body.data = encrypt(req.body);
    console.log(req.body);
    req.body.data = decrypt(req.body.data);
    console.log(req.body.data);
    const log = await ProgressLog.findById(req.body.tenderid);
    if (!log) {
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 7);

        if(req.body.file) {
            fileurl = ipfs(req.body.file);
        }
        
        let newLog = {
            logdate: Date.now(),
            duedate: nextDate,
            description: req.body.description,
            file: {
                name: req.body.filename,
                url: fileurl
            }
        };

        let progressLogObj = {
            tenderid: req.body.tenderid,
            lastlog: Date.now(),
            nextlog: nextDate,
            logs: [newLog]
        };
        progressLogObj = new ProgressLog(progressLogObj);
        await progressLogObj.save();

        const data = {
            progressLogObj
        };
        const encryptedData = encrypt(data);
    
        result = {
            message: 'Log successfully created',
            data: encryptedData
        };
        return result;
    } else {
        let progressLogs = log.logs;

        let newLog = {
            logdate: Date.now(),
            duedate: nextDate,
            description: req.body.description,
            file: {
                name: req.body.filename,
                url: fileurl
            }
        };

        progressLogs.push(newLog);

        let newProgressLog = await ProgressLog.findByIdAndUpdate(log._id, { logs: progressLogs });

        const encryptedData = encrypt(newProgressLog);
    
        result = {
            message: 'Log successfully created',
            data: encryptedData
        };
        return result;
    }
}

module.exports = {
    progressLogList,
    progressLogCreate
};