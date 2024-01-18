package com.example.demo.HolaMundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {

	@GetMapping("/saludo/{nombre}") //http://localhost:8080/saludo/nombre [GET]
	public String HolaMundo(@PathVariable String nombre) {
		return "Hola " + nombre + "!";
	}
}
