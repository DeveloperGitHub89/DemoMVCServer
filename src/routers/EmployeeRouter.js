import express from 'express';
import { fetchAll, fetchById, fetchHighestPaid, save } from '../controllers/EmployeeController.js';

const employeeRouter=express.Router();

employeeRouter.post('/employees',save)
employeeRouter.get('/employees',fetchAll)
employeeRouter.get('/employees/:id',fetchById);
employeeRouter.get('/employees/highest/salary',fetchHighestPaid);

export default employeeRouter;