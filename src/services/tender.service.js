const Tender = require('../models/tender.schema');
const Staff = require('./../models/staff.schema');
const { cloudinary } = require('./../utilities/utils');

const tenderList = async (query, pageNo, pageSize) => {
    let result, tenders;
    const queryObj = { isDeleted: false };

    let aggregationPipeline = [];
    let skip, limit;

    if (query.tendertype && !query.tendertype.includes('undefined')) {
        queryObj['tendertype'] = { $in: query.tendertype.split(",") };
    }

    if (query.tendercategory && !query.tendercategory.includes('undefined')) {
        queryObj['tendercategory'] = { $in: query.tendercategory.split(",") };
    }

    if (query.status && !query.status.includes('undefined')) {
        queryObj['status'] = { $in: query.status.split(",") };
    }

    // if (searchText && searchText !== 'undefined') {
    //     searchObj = {
    //         'index': 'tender',
    //         'text': {
    //             'query': searchText,
    //             'path': ['tenderreferencenumber', 'tendertype', 'tendercategory', 'nitdescription', 'worktitle', 'workdescription', 'productcategory', 'productsubcategory', 'contracttype', 'locationdetail', 'prebidmeetingplace', 'bidopeningplace', 'invitingofficer']
    //         }
    //     };

    //     aggregationPipeline.push({ $search: searchObj });
    // }

    aggregationPipeline.push({ $match: queryObj });

    if (pageNo && pageSize) {
        if (pageNo < 1 || pageSize < 1) {
            limit = pageSize;
            skip = ((pageNo - 1) * pageSize);
            aggregationPipeline.push({ $skip: skip });
            aggregationPipeline.push({ $limit: limit });
        }
    }

    tenders = await Tender.aggregate(aggregationPipeline).collation({ locale: 'en_US' });

    result = {
        message: 'Tender List',
        data: {
            tenders
        }
    };
    return result;
}

const tenderById = async (req) => {
    let result;

    const tender = await Tender.findById(req.params.id);

    result = {
        message: 'Tender details',
        data: {
            tender
        }
    };
    return result;
}

const tenderCreate = async (req) => {
    let result;
    
    const newTender = new Tender(req.body);
    const staff = new Staff.findById(req.parentId);
    newTender.departmentid = staff.departmentid;

    if (req.files.workdocumentfiles) {
        for (let i = 0; i < req.files.workdocumentfiles.length; i++) {
            const fileUrl = await cloudinary.uploader.upload(req.files.workdocumentfiles[i].path, {
                public_id: 'home/public/uploads/' + req.files.workdocumentfiles[i].filename,
            });
            newTender.workdocuments[i].file = fileUrl;
        }
    }

    if (req.files.nitdoc) {
        const fileUrl = await cloudinary.uploader.upload(req.files.nitdoc[0].path, {
            public_id: 'home/public/uploads/' + req.files.nitdoc[0].filename,
        });
        newTender.nitdocument = fileUrl;
    }

    await newTender.save();

    result = {
        message: 'Tender successfully created',
        data: {
            newTender
        }
    };
    return result;
};

const tenderUpdate = async (req) => {
    let result;

    const tender = await Tender.findByIdAndUpdate(req.params.id, req.body);

    result = {
        message: 'Tender updated successfully',
        data: tender
    };
    return result;
};

const tenderDelete = async (req) => {
    let result;

    const tender = await Tender.findByIdAndUpdate(req.params.id, { isDeleted: true });

    result = {
        message: 'Tender deleted successfully',
        data: tender
    };
    return result;
};

const getTendersDepartment = async (req) => {
    let result, tenders;
    const staff = await Staff.findById(req.parentId);
    const queryObj = { isDeleted: false, departmentid: staff.departmentid };

    let aggregationPipeline = [];

    if (req.query.tendertype && !req.query.tendertype.includes('undefined')) {
        queryObj['tendertype'] = { $in: req.query.tendertype.split(",") };
    }

    if (req.query.tendercategory && !req.query.tendercategory.includes('undefined')) {
        queryObj['tendercategory'] = { $in: query.tendercategory.split(",") };
    }

    if (req.query.status && !req.query.status.includes('undefined')) {
        queryObj['status'] = { $in: req.query.status.split(",") };
    }

    aggregationPipeline.push({ $match: queryObj });

    tenders = await Tender.aggregate(aggregationPipeline).collation({ locale: 'en_US' });

    result = {
        message: 'Tender List',
        data: {
            tenders
        }
    };
    return result;
};

module.exports = {
    tenderList,
    tenderById,
    tenderCreate,
    tenderUpdate,
    tenderDelete,
    getTendersDepartment
};