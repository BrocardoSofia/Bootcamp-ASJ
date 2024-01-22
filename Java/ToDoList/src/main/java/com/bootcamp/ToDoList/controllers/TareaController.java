package com.bootcamp.ToDoList.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.ToDoList.models.TareaModel;
import com.bootcamp.ToDoList.services.TareaService;

@RestController
@RequestMapping("/tareas") //localhost:8080/tareas
public class TareaController {
	@Autowired
	TareaService tareaService;
	
	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		//return new ResponseEntity<>("Hola mundo", HttpStatus.OK);
		return ResponseEntity.ok("algo");
	}
	
	@GetMapping()
	public List<TareaModel> getTareas() {
		
		return null;
	}
	
	@GetMapping("/{id}")
	public TareaModel getTarea(@PathVariable int id) {
		return null;
	}
	
	@PostMapping()
	public String createTareaById(@RequestBody TareaModel tarea) {
		return null;
	}
	
	@PutMapping("/{id}")
	public String updateTarea(@PathVariable int id, @RequestBody TareaModel tarea) {
		return "";
	}
	
	@DeleteMapping("/{id}")
	public String deleteTarea(@PathVariable int id) {
		return "";
	}
}
