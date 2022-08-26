const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const { 
    createStaff, 
    getStaffById, 
    getStaffList, 
    updateStaff, 
    deleteStaff
} = require('./../controllers/staff.controller');

const router = new express.Router();

router.get('/', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], getStaffList);

router.get('/:id', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], getStaffById);

router.post('/', [auth.verifyJwtToken, auth.userTypeDepartmentHead], createStaff);

router.put('/:id', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], updateStaff);

router.delete('/:id', [auth.verifyJwtToken, auth.userTypeDepartmentStaff], deleteStaff);

module.exports = router;