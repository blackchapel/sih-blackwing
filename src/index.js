// Importing modules
const express = require('express');
const db = require('./utilities/connection');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const authRoutes = require('./routers/auth.router');
const bidderRoutes = require('./routers/bidder.router');
const tenderRoutes = require('./routers/tender.router');
const departmentRoutes = require('./routers/department.router');
const staffRoutes = require('./routers/staff.router');
const progressLogRoutes = require('./routers/progress-log.router');
const productRoutes = require('./routers/product.router');
const grievanceRoutes = require('./routers/grievance.router');

// Initializing an express app
const app = express();

// Server Port
const PORT = process.env.PORT;

// Formatting incoming data and allowing cross origin requests
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging incoming requests
app.use(morgan('dev'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/bidder', bidderRoutes);
app.use('/api/tender', tenderRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/progresslog', progressLogRoutes);
app.use('/api/product', productRoutes);
app.use('/api/grievance', grievanceRoutes);

// Test API
app.get('/api', (req, res) => {
	res.status(200).json({
    	name: `${process.env.APP_NAME} API`,
    	apiVersion: JSON.parse(fs.readFileSync('./package.json').toString()).version
  	});
});

// Listening on the port
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});