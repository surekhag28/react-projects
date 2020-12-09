import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class ListCourseComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            courses: []
        }

        this.addCourse = this.addCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount(){
        CourseService.getCourses().then((res) => {
            this.setState({courses:res.data})
        });
        console.log(this.state.courses);
    }

    addCourse(){
        this.props.history.push("/add-course");
    }

    updateCourse(id){
        this.props.history.push(`/update-course/${id}`);
    }

    deleteCourse(id){
        CourseService.deleteCourse(id).then((res)=>{
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <div className="container">
                <h2>All Courses</h2>
                <div className="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Course ID</th>
                                <th>Course Instructor</th>
                                <th>Course Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course => 
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.instructor}</td>
                                            <td>{course.desc}</td>
                                            <td>
                                                <button className="btn btn-info" onClick={() => this.updateCourse(course.id)}>Update</button>
                                                <button className="btn btn-danger" onClick={() => this.deleteCourse(course.id)} style={{marginLeft:"10px"}}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addCourse}>Add Course</button>
                </div>
            </div>
        );
    }
}

export default ListCourseComponent;