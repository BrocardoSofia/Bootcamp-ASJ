
public class MiClase {

	public static void main(String[] args) {
		System.out.println("Hola mundo!");
		
		int edad;
		String nombre;
		float precio;
		boolean estado;
		
		edad = 29;
		nombre = "Sofia";
		precio = 100.5f;
		estado = true;
		
		System.out.println(edad);
		System.out.println("Hola "+nombre);
		System.out.println(precio);
		System.out.println(estado);
		
		if(edad >= 18) {
			System.out.println("Es mayor de edad");
		}else{
			System.out.println("Es menor de edad");
		}
	}

}
