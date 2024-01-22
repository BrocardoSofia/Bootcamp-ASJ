package com.bootcamp.ToDoList.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.ToDoList.models.TareaModel;

public interface TareaRepositoriy extends JpaRepository<TareaModel, Integer>{
	
}
