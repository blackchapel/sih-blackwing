const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const { 
    createTender, 
    getTenderById, 
    getTenderList, 
    updateTender, 
    deleteTender,
    getDepartmentTenders,
    tenderOpen,
    tenderSelect,
    getBidsByTender
} = require('./../controllers/tender.controller');

const router = new express.Router();

router.get('/department', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], getDepartmentTenders);

router.get('/', getTenderList);

router.get('/:id', getTenderById);

router.post('/', createTender);

router.put('/:id', updateTender);

router.delete('/:id', deleteTender);

router.get('/:id/bid', getBidsByTender);


router.get('/:id/open', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], tenderOpen);

router.get('/:id/select', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], tenderSelect);


module.exports = router;