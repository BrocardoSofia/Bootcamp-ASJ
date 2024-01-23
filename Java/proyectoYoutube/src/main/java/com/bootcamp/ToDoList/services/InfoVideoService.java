package com.bootcamp.ToDoList.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.ToDoList.models.InfoVideoModel;
import com.bootcamp.ToDoList.repositories.InfoVideoRepository;

@Service
public class InfoVideoService {
	@Autowired
	InfoVideoRepository infoVideoRepository;
	
	//obtener videos
	public List<InfoVideoModel> obtenerVideos(){
		return infoVideoRepository.findAll();
	}
	
	//obtener un video
	public Optional<InfoVideoModel> obtenerVideoById(int id) {
		return infoVideoRepository.findById(id);
	}
	
	//crear video
	public List<InfoVideoModel> crearVideo(InfoVideoModel video){
		infoVideoRepository.save(video);
		return infoVideoRepository.findAll();
	}
	
	//eliminar video
	public List<InfoVideoModel> eliminarVideo(int id){
		InfoVideoModel v = infoVideoRepository.findById(id).get();
		if(v != null) {
			v.setEliminado(true);
			infoVideoRepository.save(v);
		}
		return infoVideoRepository.findAll();
	}
	
	//modificar video
	public List<InfoVideoModel> modificarVideo(int id, InfoVideoModel video){
		InfoVideoModel v = infoVideoRepository.findById(id).get();
		if(v != null) {
			v.setCategoria(video.getCategoria());
			v.setDescripcion(video.getDescripcion());
			v.setEstrella(video.getEstrellas());
			v.setMeGusta(video.getMeGusta());
			v.setNoMeGusta(video.getNoMeGusta());
			v.setTitulo(video.getTitulo());
			v.setUrl(video.getUrl());
			v.setVistas(video.getVistas());
			infoVideoRepository.save(v);
		}
		return infoVideoRepository.findAll();
	}
}
