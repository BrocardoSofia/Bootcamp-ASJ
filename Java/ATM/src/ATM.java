import java.util.Scanner;

public class ATM {

	/*
	 * Crear un programa que tenga un dinero inicial.
	 * El programa también deberá contar con un menú con las siguientes opciones:
	 * 
	 * EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o 
	 * igual al saldo actual, restar el dinero extraído al saldo}
	 * 
	 * DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
	 * 
	 * CONSULTAR SALDO: debe mostrar el saldo actual
	 * 
	 * VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
	 * 
	 * SALIR: debe terminar la ejecución del programa
	*/
	static Scanner scanner = new Scanner(System.in);
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Cajero();
		scanner.close();
	}
	
	public static void Cajero() {
		float dinero = 10000;
		int opcion = 0;
		String historial = "";
		
		do {
			//muestro el menu
			menu();
			opcion = scanner.nextInt();
			
		
			switch(opcion) {
				case 1:
					float dineroExtraido = extraerDinero(dinero);
					historial += "Extraido: $"+dineroExtraido+"\n";
					dinero -= dineroExtraido;
					break;
				case 2:
					float depositado = depositar();
					historial += "Depositado: $"+depositado+"\n";
					dinero += depositado;
					break;
				case 3:
					consultarSaldo(dinero);
					historial += "Consultado saldo: $"+dinero+"\n";
					break;
				case 4: 
					ultimosMovimientos(historial);
					break;
				case 5: 
					System.out.println("\n\n\nMuchas gracias por usar ASJ ATM!");
					break;
				default:
					System.out.println("Opcion invalida!");
					break;
			}
			System.out.println("\n\n");
		
			//tomo la opcion seleccionada y voy a otra funcion
		}while(opcion != 5);
		
		
		//si elige salir termina el bucle
		
		
		
	}
	public static void menu() {
		System.out.println("----- ATM -----");
		System.out.println("1. Extraer Dinero");
		System.out.println("2. Depositar");
		System.out.println("3. Consultar Saldo");
		System.out.println("4. Ver Últimos Movimientos");
		System.out.println("5. Salir");
	}
	
	public static float extraerDinero(float dineroDisponible) {
		float dineroRetirar = 0;
		
		do {
			System.out.println("\n\nMonto disponible: $"+dineroDisponible);
			System.out.println("Ingrese el monto a retirar: ");
			dineroRetirar = scanner.nextFloat();
			
		}while(dineroRetirar >dineroDisponible);
		
		return dineroRetirar;
	}
	
	public static float depositar() {
		float dinero = 0;
		
		do {
			System.out.println("\n\nIngrese el monto a depositar: ");
			dinero = scanner.nextFloat();
		}while(dinero <= 0);
		
		return dinero;
	}
	
	public static void consultarSaldo(float dinero) {
		int seguir;
		System.out.println("\n\n\nSaldo actual: $"+dinero);
		
		System.out.println("Ingrese un numero para continuar");
		seguir = scanner.nextInt();
		}
	
	public static void ultimosMovimientos(String historial) {
		int seguir;
		System.out.println("\n\nUltimos Movimientos:\n");
		System.out.println(historial);
		
		System.out.println("Ingrese un numero para continuar");
		seguir = scanner.nextInt();
	}
	

}
