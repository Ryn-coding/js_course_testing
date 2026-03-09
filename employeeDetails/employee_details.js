/**
 * Employee Management System
 * This application manages employee records with functionality to display, filter, and search employees
 */

// Array containing employee records with details like name, department, salary, and specialization
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Management' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'JavaScript' },
    //... More employee records can be added here
];


/**
 * Displays all employees in the DOM
 * Maps through the employees array and creates HTML paragraphs for each employee
 */
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


/**
 * Calculates and displays the total salary expense for all employees
 * Uses the reduce method to sum all employee salaries
 */
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}


/**
 * Filters and displays only HR department employees
 */
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


/**
 * Finds and displays a specific employee by their ID
 * @param {number} employeeId - The ID of the employee to find
 */
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}


/**
 * Finds and displays all employees with a specific specialization
 * @param {string} specialization - The specialization to search for (e.g., 'JavaScript')
 */
function findEmployeeBySpecialization(specialization) {
    const specializedEmployees = employees.filter(employee => employee.specialization === specialization);
    if (specializedEmployees.length > 0) {
        const specializedEmployeesDisplay = specializedEmployees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = specializedEmployeesDisplay;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = `no employees found with ${specialization} specialization`;
    }
}
