import java.util.ArrayList;
import java.util.ListIterator;

public class Coleccion {
	private String nombreColeccion;
	private ArrayList<Figura> listaFiguras;
	
	public Coleccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
		this.listaFiguras = new ArrayList<Figura>();
	}

	public String getNombreColeccion() {
		return nombreColeccion;
	}

	public void setNombreColeccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
	}
	
	public void  agregarFigura(Figura fig) {
		this.listaFiguras.add(fig);
	}
	
	public void subirPrecio(double cantidad, String id) {
		boolean flag = false;
		ListIterator<Figura> iterador = this.listaFiguras.listIterator();
		
		while(iterador.hasNext() && flag == false) {
			Figura figura = iterador.next();
			
			if(figura.getCodigo() == id) {
				figura.subirPrecio(cantidad);
				iterador.set(figura);
				flag = true;
			}
		}
	}

	@Override
	public String toString() {
		String text = "Coleccion [nombreColeccion=" + nombreColeccion + ", listaFiguras=";
		
		for(Figura figura: this.listaFiguras) {
			text += "\n                             "+figura.toString();
		}
		text += "]";
		
		return text;
	}
	
	public String conCapa() {
		String superheroesConCapa = "";
		
		for(Figura figura: this.listaFiguras) {
			if(figura.getSuperheroe().getCapa()) {
				superheroesConCapa += figura.toString()+"\n";
			}
		}
		
		return superheroesConCapa;
	}
	
	public Figura masValioso() {
		Figura figMasValiosa = null;
		double mayorPrecio = 0;
		
		for(Figura figura: this.listaFiguras) {
			if(figura.getPrecio() > mayorPrecio) {
				figMasValiosa = figura;
				mayorPrecio = figura.getPrecio();
			}
		}
		
		return figMasValiosa;
	}
	
	public double getValorColeccion() {
		double precioTotal = 0;
		
		for(Figura figura: this.listaFiguras) {
			precioTotal += figura.getPrecio();
		}
		
		return precioTotal;
	}
	
	public double getVolumenColeccion() {
		double dimension = 0;
		
		for(Figura figura: this.listaFiguras) {
			dimension += figura.getDimension().getVolumen();
		}
		
		dimension += 200;
		
		return dimension;
	}
	
}
