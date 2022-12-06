import 'dotenv/config';
import express from 'express';
import employeeRouter from './src/routers/EmployeeRouter.js';
import numberRouter from './src/routers/NumberRouter.js';
const app = express();
app.use(express.json());
app.use(numberRouter)
app.use(employeeRouter)
app.listen(process.env.SERVER_PORT, () => {
    console.log('server listening on port ' + process.env.SERVER_PORT);
})