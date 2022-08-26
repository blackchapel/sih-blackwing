const mongoose = require('mongoose');

const tenderSchema = new mongoose.Schema({
    departmentid: {
        type: String,
        required: false
    },
    progresslogid: {
        type: String,
        required: false
    },
    tenderreferenceno: {
        type: String,
        required: false
    },
    tendertype: {
        type: String,
        required: false
    },
    formofcontract: {
        type: String,
        required: false
    },
    noofcovers: {
        type: String,
        required: false
    },
    tendercategory: {
        type: String,
        required: false
    },
    accounttypehead: {
        type: String,
        required: false
    },
    noofbidopeners: {
        type: String,
        required: false
    },
    allowmulticurrency: {
        type: Boolean,
        required: false,
        default: false
    },
    coverdetails: {
        type: [{
            foldername: {
                type: String,
                required: false
            },
            files: [{
                documentdescription: {
                    type: String,
                    required: false
                },
                documenttype: {
                    type: String,
                    required: false
                }
            }]
        }],
        required: false
    },
    boq: {
        type: [{ //itemdescrition, quantity, units, rate, preferredmodel
                itemdescription: {
                    type: String,
                    required: false
                },
                quantity: {
                    type: Number,
                    required: false
                },
                units: {
                    type: String,
                    required: false
                },
                rate: {
                    type: Number,
                    required: false
                },
                preferredmodel: {
                    type: String,
                    required: false
                }
        }],
        required: false
    },
    nitdescription: {
        type: String,
        required: false
    },
    nitdocument: {
        type: String,
        required: false
    },
    nitverify: {
        type: Boolean,
        required: false,
        default: false
    },
    worktitle: {
        type: String,
        required: false
    },
    workdescription: {
        type: String,
        required: false
    },
    prequalificationdetails: {
        type: String,
        required: false
    },
    productcategory: {
        type: String,
        required: false
    },
    productsubcategory: {
        type: String,
        required: false
    },
    contracttype: {
        type: String,
        required: false
    },
    tendervalue: {
        type: String,
        required: false
    },
    tendercurrency: {
        type: String,
        required: false
    },
    bidvaliditydays: {
        type: String,
        required: false
    },
    completionperioddays: {
        type: String,
        required: false
    },
    allowgtedetails: {
        type: Boolean,
        required: false,
        default: false
    },
    locationdetail: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    prebidmeeting: {
        type: Boolean,
        required: false,
        default: false
    },
    prebidmeetingplace: {
        type: String,
        required: false
    },
    prebidmeetingadress: {
        type: String,
        required: false
    },
    bidopeningplace: {
        type: String,
        required: false
    },
    tendererclass: {
        type: String,
        required: false
    },
    invitingofficer: {
        type: String,
        required: false
    },
    invitingofficeraddress: {
        type: String,
        required: false
    },
    allowitemwiseevaluation: {
        type: Boolean,
        required: false, 
        default: false
    },
    feepaymentmode: {
        type: String,
        required: false
    },
    tenderfee: {
        type: String,
        required: false
    },
    allowexemption: {
        type: Boolean,
        required: false, 
        default: false
    },
    emdfee: {
        type: String,
        required: false
    },
    emdamount: {
        type: String,
        required: false
    },
    emdecv: {
        type: String,
        required: false
    },
    allowemdexemption: {
        type: Boolean,
        required: false, 
        default: false
    },
    emdfeepayableto: {
        type: String,
        required: false
    },
    emdfeepayableat: {
        type: String,
        required: false
    },
    offlineinstruments: {
        type: [String],
        required: false
    },
    allowmulticurrency: {
        type: Boolean,
        required: false, 
        default: false
    },
    publishingdate: {
        type: Date,
        required: false
    },
    publishingat: {
        type: Date,
        required: false
    },
    documentdownloaddate: {
        type: Date,
        required: false
    },
    documentdownloadat: {
        type: Date,
        required: false
    },
    seekclarificationstartdate: {
        type: Date,
        required: false
    },
    seekclarificationstartat: {
        type: Date,
        required: false
    },
    seekclarificationenddate: {
        type: Date,
        required: false
    },
    seekclarificationendupto: {
        type: Date,
        required: false
    },
    prebidmeetingdate: {
        type: Date,
        required: false
    },
    prebidmeetingat: {
        type: Date,
        required: false
    },
    bidsubmissionstartdate: {
        type: Date,
        required: false
    },
    bidsubmissionstartat: {
        type: Date,
        required: false
    },
    bidsubmissionclosingdate: {
        type: Date,
        required: false
    },
    bidsubmissionclosingupto: {
        type: Date,
        required: false
    },
    bidopeningdate: {
        type: Date,
        required: false
    },
    bidopeningat: {
        type: Date,
        required: false
    },
    bidopeners: {
        type: [String],
        required: false
    },
    workdocuments: {
        type: {
            tenderid: {
                type: String,
                required: false
            },
            documentdescription: {
                type: String,
                required: false
            },
            documenttype: {
                type: String,
                required: false
            },
            file: {
                type: String,
                required: true
            },
            isdeleted: {
                type: Boolean,
                required: false,
                default: false
            },
            isverified: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        required: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Tender = mongoose.model('tender', tenderSchema);

module.exports = Tender;