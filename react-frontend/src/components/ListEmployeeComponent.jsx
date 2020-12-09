import React,{Component} from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data})
        });
    }

    addEmployee(){
        this.props.history.push("/add-employee");
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id){
       EmployeeService.deleteEmployee(id).then((res)=>{
           this.setState({employee:this.state.employees.filter(employee => employee.id!=id)});
       })
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    render(){
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className="row">
                    <button class="btn btn-primary" onClick={this.addEmployee} style={{marginBottom:"18px"}}>Add Employee</button>
                </div>
                <div className='row'>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Update</button>
                                                <button className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)} style={{marginLeft:"18px"}}>Delete</button>
                                                <button className="btn btn-success" onClick={() => this.viewEmployee(employee.id)} style={{marginLeft:"18px"}}>View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent;