package com.bootcamp.ToDoList.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
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

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tareas") //localhost:8080/tareas
@CrossOrigin(origins = "http://localhost:4200")
public class TareaController {
	@Autowired
	TareaService tareaService;
	
	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		//return new ResponseEntity<>("Hola mundo", HttpStatus.OK);
		return ResponseEntity.ok("algo");
	}
	
	@GetMapping()
	public ResponseEntity<List<TareaModel>> getTareas() {
		
		return ResponseEntity.ok(tareaService.obtenerTareas());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<TareaModel>> getTareaById(@PathVariable int id) {
		return ResponseEntity.ok(tareaService.obtenerTareaPorId(id));
	}
	
//	@PostMapping()
//	public ResponseEntity<List<TareaModel>> createTareaById(@RequestBody TareaModel tarea) {
//		return ResponseEntity.ok(tareaService.crearTarea(tarea));
//	}
	
	//POST
	@PostMapping()
	public ResponseEntity<Object> createTareaById(@Valid @RequestBody TareaModel tarea, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			Map<String, String> errors = new HashMap();
			
			bindingResult.getFieldErrors().forEach((error)->{
				String campo = error.getField();
				String mensaje = error.getDefaultMessage();
				
				errors.put(campo, mensaje);
			});
			return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(tareaService.crearTarea(tarea), HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<List<TareaModel>> updateTarea(@PathVariable int id, @RequestBody TareaModel tarea) {
		return ResponseEntity.ok(tareaService.modificarTarea(id, tarea));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<List<TareaModel>> deleteTarea(@PathVariable int id) {
		return ResponseEntity.ok(tareaService.eliminarTarea(id));
	}
}
