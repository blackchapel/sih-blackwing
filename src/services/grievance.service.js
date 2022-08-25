const Grievance = require('../models/grievance.schema');
const Tender = require('../models/tender.schema');
const { encrypt, decrypt } = require('./../utilities/utils');

const grievanceList = async (req) => {
    let result;
    req.body.data = decrypt(req.body.data);
    const grievances = await Grievance.find({tenderid: req.body.data.tenderid});

    const data = {
        grievances
    };
    const encryptedData = encrypt(data);

    result = {
        message: 'Grievance List',
        data: {
            encryptedData
        }
    };
    return result;
}

const grievanceCreate = async (req) => {
    let result;
    req.body.data = decrypt(req.body.data);
    const tender = await Tender.findById(req.body.data.tenderid);

    let grievanceObj = {
        tenderid: req.body.data.tenderid,
        title: req.body.data.title,
        description: req.body.data.description,
        status: 'pending',
        departmentid: tender.departmentid
    };
    grievanceObj = new Grievance(grievanceObj);
    await grievanceObj.save();

    const data = {
        grievanceObj
    };
    const encryptedData = encrypt(data);

    result = {
        message: 'Grievance successfully created',
        data: encryptedData
    };
    return result;
}

module.exports = {
    grievanceList,
    grievanceCreate
};
