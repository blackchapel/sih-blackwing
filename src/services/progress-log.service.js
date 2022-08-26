const ProgressLog = require('../models/progress-log.schema');
const Tender = require('../models/tender.schema');
const { encrypt, decrypt, cloudinary } = require('../utilities/utils');

const progressLogList = async (req) => {
    let result;
    req.body.data = decrypt(req.body.data);
    const logs = await ProgressLog.find({tenderid: req.body.data.tenderid});

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
   
    const log = await ProgressLog.findById(req.body.tenderid);
    if (!log) {
        let nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + 7);

        let fileUrl;
        if (req.file) {
            fileUrl = await cloudinary.uploader.upload(req.file.path, {
                public_id: 'home/public/uploads/' + req.file.filename,
            });
        }
        
        let newLog = {
            logdate: Date.now(),
            duedate: nextDate,
            description: req.body.description,
            file: {
                name: req.body.filename,
                url: fileUrl.url
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
    
        result = {
            message: 'Log successfully created',
            data: {
                progressLogObj
            }
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