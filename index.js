// Write your solution in this file!

let EmpName = "Sam";
let streetAddress = "11 Broadway";

//const employee = [EmpName, streetAddress];
// 1 pass 

const employee = {
// name and streetAddress are properties, key value pairs
// {} declare objects

    name: "Sam",
    streetAddress: "11 Broadway"

}
// 4 pass 3 left

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmp = {...employee};
// ... is spread operator.  ... calls for data inside an array, creates copy
// const names = ['Sam', 'Joe', 'Earl']; ...names creates a copy of the names array
// ... is non-destructive

    newEmp[key] = value;
 //  [key] array is being copied   
    return newEmp;
}

updateEmployeeWithKeyAndValue(employee, "Sam", "13 Broadway");
// output name: Sam and streetAddress: 13 Broadway

//2 pass, 5 left

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

const destructEmp = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");


function deleteFromEmployeeByKey(employee, key) {
        let employeeCopy = { ...employee };
        //makes copy of employee array
        delete employeeCopy[key];
        //deletes a key from copy of arraay
        return employeeCopy;
}
// 5 pass, 2 to go

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
// all done