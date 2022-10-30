const employee = {
    name: 'Sammy',
    streetAddress: '4866 Elm Street',
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(newEmployee, key) {
    delete newEmployee[key];
    return newEmployee;
}