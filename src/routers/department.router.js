const express = require("express");
const auth = require('./../middlewares/authentication.middleware');
const {
    createDepartment,
    updateDepartment,
    deleteDepartment,
    departmentGrievanceList,
    departmentGrievanceUpdate,
    getDepartmentTenders
} = require('./../controllers/department.controller');

const router = new express.Router();

router.post('/', createDepartment);

router.put('/:id', updateDepartment);

router.delete('/:id', deleteDepartment);

router.get('/grievances', [auth.userTypeDepartmentStaff], departmentGrievanceList);

router.put('/grievance/:id', [auth.userTypeDepartmentStaff], departmentGrievanceUpdate);

router.get('/tenders', [auth.userTypeDepartmentStaff], getDepartmentTenders);

module.exports = router;