var employees=[];

export function insertEmployee(employee){
    employees.push(employee);
}

export function getEmployees(){
    return employees;
}

export function getEmployeeById(id){
    for(var i=0;i<employees.length;i++){
        if(employees[i].id==id){
            return employees[i];
        }
    }
}

export function getHighestSalaryEmployee(){
    var max=0;
    var employee;
    for(var i=1;i<employees.length;i++){
        if(employees[i].salary>max){
            max=employees[i].salary;
            employee=employees[i]
        }
    }
    return employee;
}
    



