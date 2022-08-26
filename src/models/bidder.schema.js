const mongoose = require('mongoose');

const bidderSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            required: false
        },
        bidids: {
            type: [String],
            required: false
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please enter a valid email address']
        },
        correspondenceEmail: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please enter a valid email address']
        },
        mobile: {
            type: String,
            required: true,
            trim: true
        },
        companyName: {
            type: String,
            required: true,
            trim: true
        },
        preferentialBidder: {
            type: Boolean,
            required: false,
            default: false
        },
        preferenceCategory: {
            type: String,
            required: false,
            enum: ['MSME', 'Make in India']
        },
        registrationNumber: {
            type: String,
            required: true,
            trim: true
        },
        registeredAddress: {
            type: String,
            required: true,
            trim: true
        },
        partners: {
            type: [String],
            required: false,
            trim: true
        },
        bidderType: {
            type: String,
            required: true,
            enum: ['Indian', 'Foreign']
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: false,
            trim: true
        },
        country: {
            type: String,
            required: false,
            trim: true
        },
        postalCode: {
            type: String,
            required: true,
            trim: true
        },
        panNumber: {
            type: String,
            required: false,
            trim: true,
            min: [10, 'PAN/TAN number must have 10 characters'],
            max: [10, 'PAN/TAN number must have 10 characters']
        },
        gstinNumber: {
            type: String,
            required: false,
            trim: true,
            min: [15, 'GSTIN number must have 15 characters'],
            max: [15, 'GSTIN number must have 15 characters']
        },
        establishmentYear: {
            type: String,
            required: true,
            trim: true
        },
        natureOfBusiness: {
            type: String,
            required: true,
            trim: true
        },
        legalStatus: {
            type: String,
            required: true,
            enum: ['Limited Company', 'Undertaking', 'Jointventure', 'Partnership', 'Others']
        },
        companyCategory: {
            type: String,
            required: true,
            enum: ['Micro Unit as per MSME', 'Small Unit as per MSME', 'Medium Unit as per MSME', 'Ancillary Unit', 'Project Affected Person of this Company', 'SSI', 'Others']
        },
        title: {
            type: String,
            required: true,
            enum: ['Mrs', 'Mr', 'Ms', 'Dr', 'Sri']
        },
        contactName: {
            type: String,
            required: true,
            trim: true
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: false,
            trim: true
        },
        phone: {
            type: String,
            required: false,
            trim: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }, 
    { timestamps: true }
);

const Bidder = mongoose.model('bidder', bidderSchema);

module.exports = Bidder;