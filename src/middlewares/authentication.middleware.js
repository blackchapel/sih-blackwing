// Importing modules
const User = require('./../models/user.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

let auth = {
	verifyJwtToken:  async (req, res, next) => {
		try{
			const token = req.header('Authorization').replace('Bearer ', '');
			const jwtVerify = jwt.verify(token, process.env.JWT_SECRET);

			if (!jwtVerify) {
				res.status(401).json({
                    result: {
                        message: 'Please Authenticate'
                    }
				});
				return;
			}

			req.token = token;
			req.userId = jwtVerify['userId'];
            req.parentId = jwtVerify['parentId'];
            req.userName = jwtVerify['name'];
            req.email = jwtVerify['email'];
            req.role = jwtVerify['role'];

			next();
		} catch (error) {
			res.status(400).json({
				result: {
                    message: error.message
                }
			});
		}
	},

	userTypeAdmin: async (req, res, next) => {
		try{
			if (req.role === 'ADMIN') {
				next();
			} else {
				res.status(403).json({
                    result: {
                        message: 'Access Denied'
                    }
				});
				return;
			}
		} catch (error) {
			res.status(400).json({
				result: {
                    message: error.message
                }
			});
		}
	},

	userTypeBidder: async (req, res, next) => {
		try{
			if (req.role === 'ADMIN' || req.role === 'BIDDER')  {
				next();
			} else {
				res.status(403).json({
					result: {
                        message: 'Access Denied'
                    }
				});
				return;
			}
		} catch (error) {
			res.status(400).json({
				result: {
                    message: error.message
                }
			});
		}
	},

	userTypeDepartmentHead: async (req, res, next) => {
		try{
			if (req.role === 'ADMIN' || req.role === 'DEPARTMENT_HEAD') {
				next();
			} else {
				res.status(403).json({
					result: {
                        message: 'Access Denied'
                    }
				});
				return;
			}
		} catch (error) {
			res.status(400).json({
				result: {
                    message: error.message
                }
			});
		}
	},

	userTypeDepartmentStaff: async (req, res, next) => {
		try{
			if (req.role === 'ADMIN' || req.role === 'DEPARTMENT_HEAD' || req.role === 'DEPARTMENT_STAFF') {
				next();
			} else {
				res.status(403).json({
					result: {
                        message: 'Access Denied'
                    }
				});
				return;
			}
		} catch (error) {
			res.status(400).json({
				result: {
                    message: error.message
                }
			});
		}
	}
}

module.exports = auth;