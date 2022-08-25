const ProgressLog = require('../models/progress-log.schema');
const Tender = require('../models/tender.schema');
const { encrypt, decrypt, ipfs } = require('../utilities/utils');

const progressLogList = async (req) => {
    let result;
    req.body.data = decrypt(req.body.data);
    const logs = await ProgressLog.find({tenderid: req.body.tenderid});

    const data = {
        logs
    };
    const encryptedData = encrypt(data);

    result = {
        message: 'Progress Logs',
        data: {
            encryptedData
        }
    };
    return result;


}

const progressLogCreate = async (req) => {
    let result, fileurl;
    req.body.data = decrypt(req.body.data);
   
    const log = await ProgressLog.findById(req.body.tenderid);
    if (!log) {
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 7);

        if(req.file) {
            fileurl = ipfs(req.file);
        }
        
        let newLog = {
            logdate: Date.now(),
            duedate: nextDate,
            description: req.body.data.description,
            file: {
                name: req.body.data.filename,
                url: fileurl
            }
        };

        let progressLogObj = {
            tenderid: req.body.data.tenderid,
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
            description: req.body.data.description,
            file: {
                name: req.body.data.filename,
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