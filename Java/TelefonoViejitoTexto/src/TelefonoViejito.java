import java.util.Scanner;

public class TelefonoViejito {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in).useDelimiter("\r?\n");
		System.out.println("Ingresar numeros separados por espacios:");
		String palabra = scan.nextLine();
		String[] numeros = palabra.split(" ");
		scan.close();
		char[][] alfabeto = {
				{},
                {'a', 'b', 'c'},
                {'d', 'e', 'f'},
                {'g', 'h', 'i'},
                {'j', 'k', 'l'},
                {'m', 'n', 'o'},
                {'p', 'q', 'r','s'},
                {'t', 'u','v'},
                {'w', 'x', 'y','z'}
        };
		
		
		String mensaje="";
		for(String numeroIndex:numeros) {
			int numero= Character.getNumericValue(numeroIndex.charAt(0));
			int cantidad= numeroIndex.length();
				mensaje += alfabeto[numero-1][(cantidad-1) % alfabeto[numero-1].length];
			}
		System.out.println(mensaje);
		
	  
	}

}
