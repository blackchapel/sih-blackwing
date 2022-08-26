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
const upload = require('./../utilities/multer');

const router = new express.Router();

router.get('/department', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], getDepartmentTenders);

router.get('/', getTenderList);

router.get('/:id', getTenderById);

router.post('/', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], upload.fields([{ name: 'nitdoc', maxCount: 1 }, { name: workdocument, maxCount: 20 }]), createTender);

router.put('/:id', updateTender);

router.delete('/:id', deleteTender);


module.exports = router;