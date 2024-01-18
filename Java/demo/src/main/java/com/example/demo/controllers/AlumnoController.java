package com.example.demo.controllers;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.models.Alumno;

@RestController
public class AlumnoController {

	List<Alumno> alumnos = new ArrayList<Alumno>(
			List.of(new Alumno(1, "Bob", "Patiño", 9.5),
					new Alumno(2, "Moe", "Sczyslak", 4.0),
					new Alumno(3, "Troy", "McLure", 2.6),
					new Alumno(4, "Edna", "Krabaples", 8.7)));
	
	@GetMapping("/alumnos")
	public List<Alumno> listPersonas() {
		return alumnos;
	}
	
	@GetMapping("/alumnos/{id}")
	public Alumno getAlumnoById(@PathVariable int id) {
		
		for(Alumno a: alumnos) {
			if(a.getId() == id){
				return a;
			}
		}
		
		return null;
	}
	
	@DeleteMapping("/alumnos/{id}")
	public String deleteAlumnoById(@PathVariable int id) {
		int i=0;
		for(Alumno a: alumnos) {
			if(a.getId() == id){
				alumnos.remove(i);
			}
			i++;
		}
		
		return "Eliminando al alumno " + id;
	}
	
	@PostMapping("/alumnos")
	public String agregarAlumno(@RequestBody Alumno alumno) {
	    alumnos.add(alumno);

	    return "Se agrego correctamente al alumno " + alumno.getId();
	}
	
	@PutMapping("/alumnos/{id}")
	public String actualizarAlumno(@PathVariable int id, @RequestBody Alumno alumnoAactualizar) {
	    for(Alumno a: alumnos) {
	        if(a.getId() == id){
	            a.setNombre(alumnoAactualizar.getNombre());
	            a.setApellido(alumnoAactualizar.getApellido());
	            a.setNota(alumnoAactualizar.getNota());
	            return "Se actualizo correctamente al alumno " + id;
	        }
	    }
	    return "No se encontro al alumno " + id;
	}
}
