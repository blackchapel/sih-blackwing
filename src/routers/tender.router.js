const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const { 
    createTender, 
    getTenderById, 
    getTenderList, 
    updateTender, 
    deleteTender,
    getDepartmentTenders
} = require('./../controllers/tender.controller');

const router = new express.Router();

router.get('/department', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], getDepartmentTenders);

router.get('/', getTenderList);

router.get('/:id', getTenderById);

router.post('/', createTender);

router.put('/:id', updateTender);

router.delete('/:id', deleteTender);


module.exports = router;