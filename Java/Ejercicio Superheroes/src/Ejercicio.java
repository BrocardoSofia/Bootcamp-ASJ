
public class Ejercicio {

	public static void main(String[] args) {
		Dimension dim1 = new Dimension(10, 5, 3);
        Dimension dim2 = new Dimension(8, 4, 2);

        // Crear algunos objetos Superheroe
        Superheroe superheroe1 = new Superheroe("Superman");
        Superheroe superheroe2 = new Superheroe("Batman");
        superheroe2.setCapa(true);

        // Crear algunos objetos Figura
        Figura figura1 = new Figura("001", 50, dim1, superheroe1);
        Figura figura2 = new Figura("002", 30, dim2, superheroe2);

        // Crear una colección
        Coleccion coleccion = new Coleccion("Mi Coleccion");

        // Agregar figuras a la colección
        coleccion.agregarFigura(figura1);
        coleccion.agregarFigura(figura2);

        // Mostrar información de la colección
        System.out.println("Información de la colección:");
        System.out.println(coleccion);

        // Subir el precio de una figura en la colección
        coleccion.subirPrecio(10, "001");

        // Mostrar información de la colección después de subir el precio
        System.out.println("\nInformación de la colección después de subir el precio:");
        System.out.println(coleccion);

        // Mostrar figuras con capa
        System.out.println("\nFiguras con capa:");
        System.out.println(coleccion.conCapa());

        // Mostrar la figura más valiosa
        System.out.println("\nFigura más valiosa:");
        System.out.println(coleccion.masValioso());
        
        // Mostrar el valor total de la colección
        System.out.println("\nValor total de la colección: $" + coleccion.getValorColeccion());

        // Mostrar el volumen total de la colección
        System.out.println("Volumen total de la colección: " + coleccion.getVolumenColeccion() + " unidades cúbicas");

	}

}
