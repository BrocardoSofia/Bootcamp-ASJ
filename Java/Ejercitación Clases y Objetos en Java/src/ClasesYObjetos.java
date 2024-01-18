import java.util.ArrayList;
import java.util.Scanner;

public class ClasesYObjetos {

	public static void main(String[] args) {
		//ejercicio1();	
		//ejericio2();
		//ejericio3();
		ejericio4();
	}
	
	/*
	 * 1) Cree una clase que me permita realizar una operación matemática de 2 números. 
	 * (Crear los metodos y atributos necesarios)
	*/
	public static void ejercicio1() {
		CalculadoraSimple calculadora = new CalculadoraSimple(2,5);
		
		System.out.println(calculadora.getNum1() + "+" + calculadora.getNum2() + " = " + calculadora.suma());
		System.out.println(calculadora.getNum1() + "-" + calculadora.getNum2() + " = " + calculadora.resta());
		System.out.println(calculadora.getNum1() + "*" + calculadora.getNum2() + " = " + calculadora.multiplicacion());
		System.out.println(calculadora.getNum1() + "/" + calculadora.getNum2() + " = " + calculadora.division());
	}
	
	/*
	 * 2) Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad
	 * (puede tener decimales).
	 * El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.
	 * 
	 * Crea sus métodos get, set y toString.
	 * 
	 * Tendrá dos métodos especiales:
	 * ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad
	 * introducida es negativa, no se hará nada.
	 * retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad
	 * actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.
	*/
	public static void ejericio2() {
		Cuenta cuentaHomero = new Cuenta("Homero Simpson");
		Cuenta cuentaLisa = new Cuenta("Lisa Simpson", 260000);
		
		cuentaHomero.ingresar(3000);
		System.out.println("Cuenta "+ cuentaHomero.getTitular() +", ingresa $3000\n"+cuentaHomero.toString()+"\n");
		cuentaHomero.retirar(50000);
		System.out.println("\nCuenta "+ cuentaHomero.getTitular() +", retira $50000\n"+cuentaHomero.toString()+"\n");
		
		cuentaLisa.ingresar(3000);
		System.out.println("Cuenta "+ cuentaLisa.getTitular() +", ingresa $3000\n"+cuentaLisa.toString()+"\n");
		cuentaLisa.retirar(50000);
		System.out.println("\nCuenta "+ cuentaLisa.getTitular() +", retira $50000\n"+cuentaLisa.toString()+"\n");
	}
	
	/*
	 * 3) Haz una clase llamada Password que siga las siguientes condiciones:
	 * Que tenga los atributos longitud y contraseña . Por defecto, la longitud sera de 8.
	 * Un constructor por defecto.
	 * Un constructor con la longitud que nosotros le pasemos. Generara una contraseña aleatoria con esa longitud.
	 * Los métodos que implementa serán al menos:
	 * 
	 * -- esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe
	 *                tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
	 * -- generarPassword(): genera la contraseña del objeto con la longitud que tenga.
	 * -- Método get para contraseña y longitud.
	 * -- Método set para longitud.
	 * 
	 * Ahora, crea una clase clase ejecutable:
	 *        Obtener por teclado, contraseñas ingresadas por el usuario (pueden utilizar arrays o ArrayList).
	 *        Mostrar todas las contraseñas y si son fuertes o no
	 *        
	 * Ej: 
	 *    contraseña_1 FUERTE
	 *    contraseña_2 DEBIL
	 *    contraseña_3 FUERTE
	*/
	public static void ejericio3() {
		Scanner scanner = new Scanner(System.in);
        ArrayList<String> passwords = new ArrayList<String>();
        String password = "";
        
        do{
            System.out.print("Ingrese una contraseña (o escriba 'salir' para terminar): ");
            password = scanner.nextLine();
            
            if (!password.equals("salir")) {
            	passwords.add(password);
            } 
            
        }while(!password.equals("salir"));
        
        System.out.println("Contraseñas ingresadas:");
        
        for (String passwordRef : passwords) {
            boolean esFuerte = Password.esFuerte(passwordRef);
            String fuerza = esFuerte ? "FUERTE" : "DEBIL";
            
            System.out.println(password + " " + fuerza);
        }
	}
	
	/*
	 * 4) Crear una clase llamada Persona que siga las siguientes condiciones:
	 * Atributos: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura. Pueden añadir algún atributo si quieren.
	 * Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo 
	 * (0 números, cadena vacía para String, etc.). Sexo sera hombre por defecto.
	 * 
	 * Constructores:
	 * Un constructor por defecto.
	 * Un constructor con el nombre, edad y sexo, el resto por defecto.
	 * Un constructor con todos los atributos como parámetro.
	 * 
	 * Métodos
	 * calcularIMC(): calculara si la persona esta en su peso ideal (peso en kg/(altura^2 en m)). <br>
	 *                Si esta fórmula es menor que 20, la función devuelve un -1, si el resultado es un número entre 
	 *                20 y 25 (incluidos),significa que esta por debajo de su peso ideal y la función devuelve un 0, y 
	 *                si el resultado es mayor que 25 significa que tiene sobrepeso y la función devuelve un 1.
	 * 
	 * esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano.
	 * 
	 * comprobarSexo(char sexo): comprueba que el sexo introducido es correcto. Si no es correcto, sera H. No sera visible 
	 *                           al exterior.
	 *                           
	 * toString(): devuelve toda la información del objeto. 
	 * 
	 * generaDNI(): genera un número aleatorio de 8 cifras. Este método sera invocado cuando se construya el objeto.
	 * 
	 * Crea una clase ejecutable que haga lo siguiente:
	 * Crea 3 objetos: el primer objeto obtendrá los datos pedidas por teclado (nombre edad, sexo, peso y altura), 
	 *                 el segundo objeto obtendrá por teclado todos los datos anteriores menos el peso y la altura, y 
	 *                 el último por defecto.
	 *                 
	 * Para cada objeto, deberá comprobar si esta en su peso ideal, tiene sobrepeso o por debajo de su peso ideal con un mensaje.
	 * 
	 * Indicar para cada objeto si es mayor de edad.
	 * 
	 * Por último, mostrar la información de cada objeto.
	*/
	public static void ejericio4() {
		Persona persona1;
		Persona persona2;
		Persona persona3;

        // Primera persona    
        persona1 = crearPersonaTodosLosParametros();
        int imc1 = persona1.calcularIMC();
        calculoIMC(imc1);
        edadPersona(persona1.esMayorDeEdad());
        System.out.println(persona1.toString());

        // Segunda persona    
        persona2 = crearPersonaNombreEdadSexo();
        int imc2 = persona2.calcularIMC();
        calculoIMC(imc2);
        edadPersona(persona2.esMayorDeEdad());
        System.out.println(persona2.toString());

        // Tercer objeto
        persona3 = new Persona();
        int imc3 = persona3.calcularIMC();
        calculoIMC(imc3);
        edadPersona(persona3.esMayorDeEdad());
        System.out.println(persona3.toString());
    }
	
	public static Persona crearPersonaTodosLosParametros() {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese los datos de la primera:");
        
        System.out.print("Nombre: ");
        String nombre1 = scanner.nextLine();
        
        System.out.print("Edad: ");
        int edad1 = scanner.nextInt();
        
        scanner.nextLine();
        System.out.print("Sexo (H/M): ");
        char sexo1 = scanner.nextLine().charAt(0);
        
        System.out.print("Peso (kg): ");
        double peso1 = scanner.nextDouble();
        
        System.out.print("Altura (m): ");
        double altura1 = scanner.nextDouble();
        scanner.nextLine();
        
        scanner.close();
        
        return new Persona(nombre1, edad1, "", sexo1, peso1, altura1);
	}
	
	public static Persona crearPersonaNombreEdadSexo() {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese los datos de la segunda persona:");
        System.out.print("Nombre: ");
        String nombre2 = scanner.nextLine();
        System.out.print("Edad: ");
        int edad2 = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Sexo (H/M): ");
        char sexo2 = scanner.nextLine().charAt(0);
        
        scanner.close();
        
        return new Persona(nombre2, edad2, sexo2);
	}
	
	public static void calculoIMC(int imc) {
		String mensaje1 = "";
        if (imc == -1) {
            mensaje1 = "por debajo de su peso ideal";
        } else if (imc == 0) {
            mensaje1 = "en su peso ideal";
        } else {
            mensaje1 = "con sobrepeso";
        }
        
        System.out.println("La persona está " + mensaje1);
	}
	
	public static void edadPersona(boolean mayorDeEdad){
		if (mayorDeEdad) {
            System.out.println("La primera persona es mayor de edad");
        } else {
            System.out.println("La primera persona es menor de edad");
        }
        
	}
}
