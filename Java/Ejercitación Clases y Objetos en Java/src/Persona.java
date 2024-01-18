import java.util.Random;

public class Persona {
	private String nombre;
    private int edad;
    private String DNI;
    private char sexo;
    private double peso;
    private double altura;

    public Persona() {
        this.nombre = "";
        this.edad = 0;
        this.DNI = generaDNI();
        this.sexo = 'H';
        this.peso = 0;
        this.altura = 0;
    }

    public Persona(String nombre, int edad, char sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = generaDNI();
        this.sexo = comprobarSexo(sexo);
        this.peso = 0;
        this.altura = 0;
    }

    public Persona(String nombre, int edad, String DNI, char sexo, double peso, double altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = comprobarSexo(sexo);
        this.peso = peso;
        this.altura = altura;
    }

    public int calcularIMC() {
    	int imcRespuesta = 1;
        double imc = this.peso / Math.pow(this.altura, 2);
        
        if (imc < 20) {
        	imcRespuesta =  -1;
        } else if (imc >= 20 && imc <= 25) {
        	imcRespuesta =  0;
        } 
        
        return imcRespuesta;
    }

    public boolean esMayorDeEdad() {
        return (this.edad >= 18);
    }

    private char comprobarSexo(char sexo) {
    	char sexoRta = 'H';
    	
        if (sexo == 'H' || sexo == 'M') {
        	sexoRta = sexo;
        } 
        
        return sexoRta;
    }

    public String toString() {
        return "Nombre: " + this.nombre + "\n" +
               "Edad: " + this.edad + "\n" +
               "DNI: " + this.DNI + "\n" +
               "Sexo: " + this.sexo + "\n" +
               "Peso: " + this.peso + "\n" +
               "Altura: " + this.altura;
    }

    private String generaDNI() {
        Random random = new Random();
        
        int num = random.nextInt(90000000) + 10000000;
        
        return Integer.toString(num);
    }
}
