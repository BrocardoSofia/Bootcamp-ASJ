package com.bootcamp.ToDoList.models;

import java.util.ArrayList;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "infovideos")
public class InfoVideoModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String url;
	private String categoria;
	private String titulo;
	private String descripcion;
	private int vistas;
	private int meGusta;
	private int noMeGusta;
	private ArrayList<Integer> estrellas;
	private boolean eliminado;
	
	public InfoVideoModel(int id, String url, String categoria, String titulo, String descripcion) {
		this.id = id;
		this.url = url;
		this.categoria = categoria;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.vistas = 0;
		this.meGusta = 0;
		this.noMeGusta = 0;
		this.estrellas = new ArrayList<Integer>();
		this.eliminado = false;
	}
	
	public InfoVideoModel() {
		super();
	}
	
	public boolean isEliminado() {
		return this.eliminado;
	}
	
	public void setEliminado(boolean eliminado) {
		this.eliminado = eliminado;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public int getVistas() {
		return vistas;
	}

	public void setVistas(int vistas) {
		this.vistas = vistas;
	}

	public int getMeGusta() {
		return meGusta;
	}

	public void setMeGusta(int meGusta) {
		this.meGusta = meGusta;
	}

	public int getNoMeGusta() {
		return noMeGusta;
	}

	public void setNoMeGusta(int noMeGusta) {
		this.noMeGusta = noMeGusta;
	}

	public ArrayList<Integer> getEstrellas() {
		return estrellas;
	}

	public void setEstrella(ArrayList<Integer> estrellas) {
		this.estrellas = estrellas;
	}

	public int getId() {
		return id;
	}
	
	
}
