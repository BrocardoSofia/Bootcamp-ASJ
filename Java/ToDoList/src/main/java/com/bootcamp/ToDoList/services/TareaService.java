package com.bootcamp.ToDoList.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.ToDoList.models.TareaModel;
import com.bootcamp.ToDoList.repositories.TareaRepositoriy;

@Service
public class TareaService {
	
	@Autowired
	TareaRepositoriy tareaRepository;
	
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
}
