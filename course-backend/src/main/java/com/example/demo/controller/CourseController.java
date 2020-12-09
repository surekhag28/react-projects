package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Course;
import com.example.demo.repository.CourseRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CourseController {
	
	@Autowired
	CourseRepository courseRepo;
	
	@GetMapping("/courses")
	public List<Course> getAllCourses(){
		return courseRepo.findAll();
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return courseRepo.save(course);
	}
	
	@GetMapping("/courses/{id}")
	public ResponseEntity<Course> getCourseById(@PathVariable int id){
		Course course = courseRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Course not exist with id : "+id));
		
		return ResponseEntity.ok(course);
	}
	
	@PutMapping("/courses/{id}")
	public Course updateCourse(@RequestBody Course course,@PathVariable int id) {
		Course c = courseRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Course does not exist with id: "+id));
		c.setDesc(course.getDesc());
		c.setInstructor(course.getInstructor());
		courseRepo.save(c);
		return c;
	}
	
	@RequestMapping(value="/courses/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Map<String,Boolean>> deleteCourse(@PathVariable int id){
		Course course = courseRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Course does not exist with id: "+id));
		courseRepo.delete(course);
		Map<String,Boolean> response = new HashMap<String,Boolean>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
