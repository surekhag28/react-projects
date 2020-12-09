import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class UpdateCourseComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            id:this.props.match.params.id,
            desc:'',
            instructor:''
        }

        this.changeDescHandler = this.changeDescHandler.bind(this);
        this.changeInstHandler = this.changeInstHandler.bind(this);

        this.updateCourse = this.updateCourse.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeDescHandler = (event) => {
        this.setState({desc: event.target.value})
    }

    changeInstHandler = (event) => {
        this.setState({instructor: event.target.value})
    }

    componentDidMount(){
        CourseService.getCourseById(this.state.id).then((res)=>{
            let course = res.data;
            this.setState({
                desc: course.desc,
                instructor: course.instructor
            })
        })
    }

    updateCourse = (e) => {
        e.preventDefault();
        let course = {desc:this.state.desc, instructor:this.state.instructor};
        console.log('course => ' + JSON.stringify(course));

        CourseService.updateCourse(course,this.state.id).then((res)=>{
            this.props.history.push('/courses');
        });
    }

    cancel() {
        this.props.history.push('/courses');
    }

    render() {
        return (
            <div>
                <h2>Course Details Form</h2>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Course Details</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Course Description: </label>
                                        <input placeholder="Course Description" name="desc" className="form-control"
                                        value={this.state.desc} onChange={this.changeDescHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Course instructor: </label>
                                        <input placeholder="Course Instructor" name="instructor" className="form-control"
                                        value={this.state.instructor} onChange={this.changeInstHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateCourse}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateCourseComponent;