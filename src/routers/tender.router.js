const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const { 
    createTender, 
    getTenderById, 
    getTenderList, 
    updateTender, 
    deleteTender,
    getDepartmentTenders,
    getTenderBids,
    tenderOpen
} = require('./../controllers/tender.controller');

const router = new express.Router();

router.get('/department', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], getDepartmentTenders);

router.get('/', getTenderList);

router.get('/:id', getTenderById);

router.post('/', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], createTender);

router.put('/:id', updateTender);

router.delete('/:id', deleteTender);

router.get('/:id/bid', getTenderBids);

router.get('/:id/open', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], tenderOpen);

module.exports = router;