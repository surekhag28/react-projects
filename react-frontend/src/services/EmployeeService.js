import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

    getEmployees(){
        return axios.get(this.EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(this.EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployeeById(employeeId){
        return axios.get(this.EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }

    updateEmployee(employee,employeeId){
        return axios.put(this.EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(this.EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
}

export default new EmployeeService();