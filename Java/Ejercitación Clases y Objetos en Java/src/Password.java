import java.util.Random;

public class Password {
	private int longitud;
	private String password;
	
	public Password() {
		this.longitud = 8;
		this.password = "";
	}
	
	public Password(int longitud) {
		this.longitud = longitud;
		this.password = this.generarPassword(longitud);
	}
	
	private static String generarPassword(int longitud) {
		String letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    Random random = new Random();
	    char[] password = new char[longitud];
	    
	    for (int i = 0; i < longitud; i++) {
	    	password[i] = letras.charAt(random.nextInt(letras.length()));
	    }
	    return new String(password);
	}
	
	public static boolean esFuerte(String password) {
	    int mayusculas = 0;
	    int minusculas = 0;
	    int numeros = 0;
	    for (int i = 0; i < password.length(); i++) {
	        char c = password.charAt(i);
	        if (Character.isUpperCase(c)) {
	            mayusculas++;
	        } else if (Character.isLowerCase(c)) {
	            minusculas++;
	        } else if (Character.isDigit(c)) {
	            numeros++;
	        }
	    }
	    return (mayusculas > 2 && minusculas > 1 && numeros > 5);
	}

	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getPassword() {
		return password;
	}
	
	
}
