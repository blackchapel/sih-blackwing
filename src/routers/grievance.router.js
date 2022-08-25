const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createGrievance,
    listGrievance
} = require('./../controllers/grievance.controller');

const router = new express.Router();

router.get('/', [auth.verifyJwtToken, auth.userTypeBidder], listGrievance);

router.post('/', [auth.verifyJwtToken, auth.userTypeBidder], createGrievance);

module.exports = router;