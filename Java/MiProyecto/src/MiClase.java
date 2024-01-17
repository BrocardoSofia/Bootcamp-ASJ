import java.util.Scanner;

public class MiClase {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		System.out.println("Hola Mundo!");
//		int entero;
//		double doble;
//		long largo;
//		short corto;
//		float flotante;
//		
//		System.out.println("int: "+Integer.MIN_VALUE + "-" + Integer.MAX_VALUE);
//		System.out.println("double: "+Double.MIN_VALUE + "-" + Double.MAX_VALUE);
//		System.out.println("long: "+Long.MIN_VALUE + "-" + Long.MAX_VALUE);
//		System.out.println("short: "+Short.MIN_VALUE + "-" + Short.MAX_VALUE);
//		System.out.println("float: "+Float.MIN_VALUE + "-" + Float.MAX_VALUE);
		
		/*
		 *  Dada una palabra ingresada por el usuario (por teclado), mostrar su equivalente en ASCII (letra por letra)
			Ej: Hola ---> 72 111 108 97
			Extra: agregarle los espacios en blanco
		 */
//		Scanner scanner = new Scanner(System.in);
//		
//		String palabra = scanner.nextLine();
//		String palabraASCII = "";
//		int aux = 0;
//		
//		char[] caracteres = palabra.toCharArray();
//		
//		for(int i=0; i<caracteres.length; i++) {
//			aux = caracteres[i];
//			palabraASCII+=aux+" ";
//		}
//		
//		System.out.println(palabraASCII);
//		
//		scanner.close();
		/*
		 * Pedir al usuario que ingrese ¿cuántas notas quiere ingresar?
		 * Según eso, pedir el valor de cada nota (1 al 10)
		 * Sacar el promedio
		 * 
		 * Aclaración: hacerlo con FOR, WHILE y DO-WHILE
		 */
		
//		Scanner scanner = new Scanner(System.in);
//		int cantidadDeNotas;
//		int[] notasFor = null;
//		int[] notasWhile = null;
//		int[] notasDoWhile = null;
//		float promedioFor, promedioWhile, promedioDoWhile;
//		
//		//primero pregunto hasta que me de un valor valido
//		do {
//			cantidadDeNotas = scanner.nextInt();
//		}while(cantidadDeNotas > 0);
//		
//		
//		//con for
//		for(int i=0; i<cantidadDeNotas; i++) {
//			do {
//				System.out.println("Ingrese la nota " + i+1);
//				notasFor[i] = scanner.nextInt();
//			}while(notasFor[i]<1 && notasFor[i]>10);
//		}
//		promedioFor = promedio(notasFor);
//		
//		//con while
//		int e = 0;
//		while(e < cantidadDeNotas) {
//			do {
//				System.out.println("Ingrese la nota " + e+1);
//				notasWhile[e] = scanner.nextInt();
//			}while(notasFor[e]<1 && notasFor[e]>10);
//			e++;
//		}
//		promedioWhile = promedio(notasFor);
//		
//		//con do-while
//		int x = 0;
//		do {
//			do {
//				System.out.println("Ingrese la nota " + x+1);
//				notasDoWhile[x] = scanner.nextInt();
//			}while(notasFor[x]<1 && notasFor[x]>10);
//			x++;
//		}while(x <= cantidadDeNotas);
//		promedioDoWhile = promedio(notasFor);
//		
//		scanner.close();
		
		/*
		 * Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se 
		 * determine si el triángulo es válido o no.
		 * */
		Scanner scanner = new Scanner(System.in);
//		int[] angulos = new int[3];
//		int sumaAngulos;
//		
//		for(int i=0; i<3; i++) {
//			System.out.println("Ingrese el " + (i+1) + "° ángulo interno del triángulo: ");
//			angulos[i] = scanner.nextInt();
//		}
//
//	    sumaAngulos = angulos[0] + angulos[1] + angulos[2];
//
//	    if (sumaAngulos == 180) {
//	      System.out.println("El triángulo es válido.");
//	    } else {
//	      System.out.println("El triángulo no es válido.");
//	    }
		
		
		/*
		 * Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
		 * */
//	    System.out.println("Ingrese una cadena: ");
//	    String cadena = scanner.nextLine();
//
//	    char primerCaracter = cadena.charAt(0);
//
//	    if (Character.isDigit(primerCaracter)) {
//	      System.out.println("La cadena empieza con un número.");
//	    } else {
//	      System.out.println("La cadena empieza con una letra.");
//	    }
//		
//		/*
//		 * Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
//		 * */
//	    System.out.println("Ingrese el valor de N: ");
//	    int n = scanner.nextInt();
//
//	    System.out.println("Ingrese el valor de M: ");
//	    int m = scanner.nextInt();
//
//	    int sumaPares = 0;
//
//	    for (int i = n; i <= m; i++) {
//	      if (i % 2 == 0) {
//	        sumaPares += i;
//	      }
//	    }
//
//	    System.out.println("La suma de todos los números pares entre " + n + " y " + m + " es: " + sumaPares);
		
		/*
		 * Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si 
		 * el número es igual a la suma de sus divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
		 * */
//	    System.out.println("Ingrese un número: ");
//	    int numero = scanner.nextInt();
//
//	    int sumaDivisores = 0;
//
//	    for (int i = 1; i < numero; i++) {
//	      if (numero % i == 0) {
//	        sumaDivisores += i;
//	      }
//	    }
//
//	    if (sumaDivisores == numero) {
//	      System.out.println(numero + " es un número perfecto.");
//	    } else {
//	      System.out.println(numero + " no es un número perfecto.");
//	    }
		
		/*
		 * Recrear el siguiente dibujo:(ver imagen)

 			Ej: en este caso, el usuario ingresó 8 
 			********
 			 *******
 			********
 			 *******
 			********
 			 *******
 			********
 			 *******
		 * */
	    
//	    System.out.println("Ingrese un número: ");
//	    int numeroDibujo = scanner.nextInt();
//
//	    for (int i = 1; i <= numeroDibujo; i++) {
//	      if (i % 2 == 0) {
//	    	  for (int j = 1; j <= numeroDibujo-1; j++) {
//		  	        System.out.print(" *");
//		  	      }
//	      }else {
//	    	  for (int j = 1; j <= numeroDibujo; j++) {
//	  	        System.out.print("* ");
//	  	      }
//	      }
//	      
//	      System.out.println();
//	    }
	    scanner.close();
		
	}
	
//	public static float promedio(int[] array) {
//		float promedio = 0;
//		int suma = 0;
//		
//		for(int i=0; i<array.length; i++) {
//			suma += array[i];
//		}
//		
//		promedio = (float)(suma/array.length);
//		
//		return promedio;
//	}

}
