type Employee = {
    id: number;
    name: string;
    salary: number;
};
let employees: Employee[] = [];
function createEmployee(employee: Employee): void {
    employees.push(employee);
}
function getEmployees(): Employee[] {
    return employees;
}
function updateEmployee(id: number, name: string, salary: number): void {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        employee.name = name;
        employee.salary = salary;
    }
}
function deleteEmployee(id: number): void {
    employees = employees.filter(emp => emp.id !== id);
}
createEmployee({ id: 1, name: "Arun", salary: 30000 });
createEmployee({ id: 2, name: "Priya", salary: 35000 });
console.log(getEmployees());
updateEmployee(1, "Arun Kumar", 40000);
console.log(getEmployees());
deleteEmployee(2);
console.log(getEmployees());