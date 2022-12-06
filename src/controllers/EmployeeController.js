import { StatusCodes } from "http-status-codes";
import { getEmployeeById, getEmployees, getHighestSalaryEmployee, insertEmployee } from "../services/EmployeeService.js";

export function save(request,response){
    try {
        insertEmployee(request.body);
        response.status(StatusCodes.CREATED)
        .json({message:'employee created'});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in saving employee'})
    }
}

export function fetchAll(request,response){
    try {
        const employees=getEmployees()
        if (employees.length>0) {
            response.status(StatusCodes.OK)
        .json(employees);
        } else {
            response.status(StatusCodes.NOT_FOUND)
        .json({message:'No employee found'});
        }
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in fetching employee'})
    }
}

export function fetchById(request, response) {
    try {
        const employee=getEmployeeById(request.params.id)
        if (employee) {
            response.status(StatusCodes.OK).json(employee);
        } else {
            response.status(StatusCodes.NOT_FOUND).json({message: 'Employee not found'});
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in fetching employee'})
    }   
}

export function fetchHighestPaid(request, response){
    try {
       const employee= getHighestSalaryEmployee();
       response.status(StatusCodes.OK).json(employee);
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in fetching employee'})
    }    
}