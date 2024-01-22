package com.bootcamp.ToDoList.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.ToDoList.models.TareaModel;
import com.bootcamp.ToDoList.repositories.TareaRepositoriy;

@Service
public class TareaService {
	
	@Autowired
	TareaRepositoriy tareaRepository;
	
	//obtener tareas
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
	
	//obtener tarea segun su id
	public Optional<TareaModel> obtenerTareaPorId(int id) {
		return tareaRepository.findById(id);
	}
	
	//insertat tarea
	public List<TareaModel> crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return tareaRepository.findAll();
	}
	
	//eliminar tarea
	public List<TareaModel> eliminarTarea(int id) {
		System.out.println(id);
		TareaModel t = tareaRepository.findById(id).get();
		if(t != null) {
			t.setDeleted(true);
			tareaRepository.save(t);
		}
		return tareaRepository.findAll();
	}
	
	//modificar tarea
	public List<TareaModel> modificarTarea(int id, TareaModel tarea) {
		System.out.println(id);
		System.out.println(tarea);
		TareaModel t = tareaRepository.findById(id).get();
		if(t != null) {
			t.setTaskName(tarea.getTaskName());
			t.setDate(tarea.getDate());
			t.setSelected(tarea.isSelected());
			t.setDeleted(tarea.isDeleted());
			tareaRepository.save(t);
		}
		return tareaRepository.findAll();
	}
	
}
