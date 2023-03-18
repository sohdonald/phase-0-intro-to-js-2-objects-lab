// Write your solution in this file!

let EmpName = "Sam";
let streetAddress = "11 Broadway";

//const employee = [EmpName, streetAddress];
// 1 pass 

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
// 4 pass 3 left

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = {...employee};
    newEmp[key] = value;
    return newEmp;
}
//2 pass, 5 left

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

const destructEmp = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");


function deleteFromEmployeeByKey(employee, key) {
        let employeeCopy = { ...employee };
        delete employeeCopy[key];
        return employeeCopy;
}
// 5 pass, 2 to go

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
// all done