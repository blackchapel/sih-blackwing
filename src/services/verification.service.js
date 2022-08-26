const axios = require('axios');
const dotenv = require('dotenv').config();

const verifyGstin = async (gstinNumber) => {
    const url = `http://sheet.gstincheck.co.in/check/${process.env.GSTIN_API_KEY}/${gstinNumber}`;
    const response = await axios.get(url);
    return response.data.flag;
};

module.exports = verifyGstin;