import axios from 'axios';

class CourseService {

    COURSE_API_BASE_URL = "http://localhost:8080/api/v1/courses";

    getCourses(){
        return axios.get(this.COURSE_API_BASE_URL);
    }

    addCourse(course){
        return axios.post(this.COURSE_API_BASE_URL,course);
        
    }

    getCourseById(id){
        return axios.get(this.COURSE_API_BASE_URL+'/'+id,{
            headers: {"Access-Control-Allow-Origin": "*"}
        });
    }

    updateCourse(course,id){
        return axios.put(this.COURSE_API_BASE_URL+'/'+id,course);
    }

    deleteCourse(id){
        return axios.delete(this.COURSE_API_BASE_URL+'/'+id);
    }
}

export default new CourseService();