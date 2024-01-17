import java.util.Random;
import java.util.Scanner;

public class Arrays {

	static Scanner scanner = new Scanner(System.in);
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//ejercicio2();
		//ejercicio3();
		//ejercicio4();
		ejercicio6();
		
		
		scanner.close();
	}
	
	/* EJERCICIO 2
	 * Escribe un programa que lea 15 números por teclado y que los almacene en un array. 
	 * Rota los elementos de ese array, es decir, el elemento de la posición 0 debe pasar a 
	 * la posición 1, el de la 1 a la 2, etc. El número que se encuentra en la última posición debe 
	 * pasar a la posición 0. Finalmente, muestra el contenido del array.
	 */
	public static void ejercicio2() {
		int array[] = new int [15];
		
		for(int i=0; i<15; i++) {
			System.out.println("Ingrese el "+(i+1)+"° número: ");
			array[i] = scanner.nextInt();
		}
		
		System.out.println("\n\nArray original: ");
		mostrarArray(array);
		
		invertirArray(array);
		System.out.println("\n\nArray invertido: ");
		mostrarArray(array);
		
	}
	
	public static void mostrarArray(int array []) {
		for(int num: array) {
			System.out.print(num + "-");
		}
	}

	public static void invertirArray(int array []) {
		int limite = array.length;
		
	    for (int i = 0; i < limite / 2; i++) {
	        int temp = array[i];
	        array[i] = array[limite - i - 1];
	        array[limite - i - 1] = temp;
	    }
	}
	
	/*
	 * Ejercicio 3 
	 * Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 y que los almacene en un array. 
	 * El programa debe ser capaz de pasar todos los números pares a las primeras posiciones del array (del 0 en adelante) 
	 * y todos los números impares a las celdas restantes. Utiliza arrays auxiliares si es necesario.
	*/
	public static void ejercicio3() {
		int numerosRandom[] = new int[20];
		int impares[] = new int[20];
		
	    Random random = new Random();
	    
	    int aux;
	    int contadorPares = 0;
	    int contadorImpares = 0;
	    
	    for(int i = 0; i < 20; i++) {
	    	aux = random.nextInt(101);
	    	
	    	if(aux % 2 == 0) {
	    		numerosRandom[contadorPares] = aux;
	    		contadorPares++;
	    	}else{
	    		impares[contadorImpares] = aux;
	    		contadorImpares++;
	    	}
	    }
	    
	    
	    for(int i=0; i<contadorImpares; i++) {
	    	numerosRandom[contadorPares] = impares[i];
	    	contadorPares++;
	    }
	    
	    
	    mostrarArray(numerosRandom);
	}
	
	/*EJERCICIO 4
	 * Generar una matriz de 3×3 con números aleatorios sin repetirse.
	*/
	public static void ejercicio4() {
		int matrix[][]= new int [3][3];
		Random random = new Random();
		
		for(int i=0; i<3; i++) {
			for(int j=0; j<3; j++) {
				matrix[i][j]=random.nextInt(101);
			}
		}
		
		mostrarMatriz(matrix);
		
		ejercicio5(matrix);
	}
	
	public static void mostrarMatriz(int matrix [][]) {
		for(int i=0; i<matrix.length; i++) {
			for(int j=0; j<matrix[i].length; j++) {
				System.out.print(matrix[i][j]+"-");
			}
			System.out.println("");
		}
	}
	
	/*
	 * Ejercicio 5
	 * Dada la matriz anterior, realizar la suma de una columna o fila 
	 * (preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
	 * Extra: mostrar el resultado al final de la fila/columna correspondiente
	 * */
	public static void ejercicio5(int matriz [][]) {
		int opcion;
		int numero;
		int resultado = 0;
		
		do {
			System.out.println("\nQue desea sumar?");
			System.out.println("1. Fila");
			System.out.println("2. Columna");
			opcion = scanner.nextInt();
		}while(opcion!=1 && opcion!=2);
		
		do {
			System.out.println("Cual numero? (1-2-3)");
			numero = scanner.nextInt();
		}while(numero<=0 || numero>=4);
		
		switch(opcion) {
			case 1:
				resultado = sumarFila(matriz, numero-1);
				break;
				
			case 2:
				resultado = sumarColumna(matriz, numero-1);
				break;
		}
		
		System.out.println("Resultado: " + resultado);
	}
	
	public static int sumarFila(int matriz[][], int fila) {
		int suma = 0;
		
		for(int i=0; i<matriz[fila].length; i++) {
			suma += matriz[fila][i];
		}
		
		return suma;
	}
	
	public static int sumarColumna(int matriz[][], int columna) {
		int suma = 0;
		
		for(int i=0; i<matriz.length; i++) {
			suma += matriz[i][columna];
		}
		
		return suma;
	}
	
	/*EJERCICIO 6
	 * Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer 
	 * un menú con estas opciones:
	 * 
	 * Rellenar TODA la matriz de números.
	 * Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
	 * Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
	 * Sumar la diagonal principal (ver ejemplo)
	 * Sumar la diagonal inversa (ver ejemplo)
	 * La media de todos los valores de la matriz
	 * 
	 * IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones no se deberán de ejecutar, 
	 * simplemente mostrar un mensaje donde diga que debes rellenar la matriz
	*/
	public static void ejercicio6() {
		int opcion;
		int matriz[][] = new int [4][4];
		
	    do {
	    	menuEj6();
	        opcion = scanner.nextInt();
	        switch (opcion) {
	            case 1:
	            	llenarMatriz4x4(matriz);
	                break;
	            case 2:
	            	sumaFilaMatriz4x4(matriz);
	                break;
	            case 3:
	            	sumaColumnaMatriz4x4(matriz);
	                break;
	            case 4:
	            	sumaDiagonal(matriz);
	                break;
	            case 5:
	            	sumaDiagonalInversa(matriz);
	                break;
	            case 6:
	            	mediaMatrix(matriz);
	                break;
	            case 7:
	                System.out.println("Saliendo del programa...");
	                break;
	            default:
	                System.out.println("Opción inválida. Intente nuevamente.");
	                break;
	        }
	    } while (opcion != 7);
	}
	
	public static void menuEj6() {
		System.out.println("1. Llenar matriz");
		System.out.println("2. Suma de una fila");
		System.out.println("3. Suma de una columna");
		System.out.println("4. Sumar la diagonal principal");
		System.out.println("5. Sumar la diagonal inversa");
		System.out.println("6. La media de todos los valores de la matriz");
		System.out.println("7. Salir");
	}
	
	public static void llenarMatriz4x4(int matrix[][]) {
	    Random random = new Random();
	    for (int i = 0; i < matrix.length; i++) {
	        for (int j = 0; j < matrix[i].length; j++) {
	            matrix[i][j] = random.nextInt(100);
	        }
	    }
	}
	
	public static void sumaFilaMatriz4x4(int matrix[][]) {
	    int fila;
	    int suma = 0;
	    
	    do {
	        System.out.print("Ingrese el número de fila que desea sumar (1 a 4): ");
	        fila = scanner.nextInt();
	    } while (fila < 1 || fila > 4);
	    
	    for (int j = 0; j < matrix[fila - 1].length; j++) {
	        suma += matrix[fila - 1][j];
	    }

	    System.out.println("La suma de la fila " + fila + " es: " + suma);
	}
	
	public static void sumaColumnaMatriz4x4(int matrix[][]) {
		int columna;
		int suma = 0;
		
	    do {
	        System.out.print("Ingrese el número de columna que desea sumar (1 a 4): ");
	        columna = scanner.nextInt();
	    } while (columna < 1 || columna > 4);
	    
	    for (int i = 0; i < matrix.length; i++) {
	        suma += matrix[i][columna - 1];
	    }

	    System.out.println("La suma de la columna " + columna + " es: " + suma);
	}
	
	public static void sumaDiagonal(int matrix[][]) {
	    int suma = 0;
	    for (int i = 0; i < matrix.length; i++) {
	        suma += matrix[i][i];
	    }
	    
	    System.out.println("La suma de la diagonal principal es: " + suma);
	}
	
	public static void sumaDiagonalInversa(int matrix[][]) {
	    int suma = 0;
	    for (int i = 0; i < matrix.length; i++) {
	        suma += matrix[i][matrix.length - i - 1];
	    }
	    
	    System.out.println("La suma de la diagonal inversa es: " + suma);
	}
	
	public static void mediaMatrix(int matrix[][]) {
	    int suma = 0;
	    double media;
	    
	    for (int i = 0; i < matrix.length; i++) {
	        for (int j = 0; j < matrix[i].length; j++) {
	            suma += matrix[i][j];
	        }
	    }
	    
	    media = (double) suma / (matrix.length * matrix[0].length);
	    System.out.println("La media de todos los valores de la matriz es: " + media);
	}
	
	/*
	 * Ejercicio 7
	 * Queremos realizar una encuesta a 10 personas, en esta encuesta indicaremos el sexo 
	 * (1=masculino, 2=femenino), si trabaja (1=si trabaja, 2= no trabaja) y su sueldo (si tiene un trabajo, 
	 * sino sera un cero) estará entre 600 y 2000 (valor entero). Los valores pueden ser generados aleatoriamente. 
	 * Calcula y muestra lo siguiente:
	 * 
	 * Porcentaje de hombres (tengan o no trabajo).
	 * Porcentaje de mujeres (tengan o no trabajo).
	 * Porcentaje de hombres que trabajan.
	 * Porcentaje de mujeres que trabajan.
	 * El sueldo promedio de las hombres que trabajan.
	 * EL sueldo promedio de las mujeres que trabajan.
	 * Usa todos los métodos que veas necesarios, piensa que es aquello que se repite o 
	 * que puede ser mejor tenerlo por separado.
	*/
	
}
