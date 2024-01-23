package com.bootcamp.ToDoList.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.ToDoList.models.InfoVideoModel;
import com.bootcamp.ToDoList.services.InfoVideoService;

@RestController
@RequestMapping("/infovideos") //localhost:8080/infovideos
@CrossOrigin(origins = "http://localhost:4200")
public class InfoVideoController {
	@Autowired 
	InfoVideoService infoVideoService;
	
	//GET
	@GetMapping()
	public ResponseEntity<List<InfoVideoModel>> getVideos() {
		return ResponseEntity.ok(infoVideoService.obtenerVideos());
	}
	
	//GET BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Optional<InfoVideoModel>> getVideoById(@PathVariable int id) {
		return ResponseEntity.ok(infoVideoService.obtenerVideoById(id));
	}
	
	//POST
	@PostMapping()
	public ResponseEntity<List<InfoVideoModel>> createVideo(@RequestBody InfoVideoModel video) {
		return ResponseEntity.ok(infoVideoService.crearVideo(video));
	}
	
	//PUT
	@PutMapping("/{id}")
	public ResponseEntity<List<InfoVideoModel>> updateVideo(@PathVariable int id, @RequestBody InfoVideoModel video) {
		return ResponseEntity.ok(infoVideoService.modificarVideo(id, video));
	}
	
	//DELETE
	@DeleteMapping("/{id}")
	public ResponseEntity<List<InfoVideoModel>> deleteVideo(@PathVariable int id) {
		return ResponseEntity.ok(infoVideoService.eliminarVideo(id));
	}
}
