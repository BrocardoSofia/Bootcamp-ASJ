import java.util.Scanner;

public class Challenge {

	public static void main(String[] args) {
		/*int num1, num2, num3;
		Scanner scanner = new Scanner(System.in);
		
		num1 = scanner.nextInt();
		num2 = scanner.nextInt();
		num3 = scanner.nextInt();
		
		scanner.close();
		
		System.out.println(num1 + "\n" + num2 + "\n" + num3);
		
		//string
		//double
		//int
		
		String string;
		double num_double;
		int num_int;
		
		Scanner scanner = new Scanner(System.in);
		
		scanner.nextLine();
		string = scanner.nextLine();
		num_double = scanner.nextDouble();
		num_int = scanner.nextInt();
		
		System.out.println("\nString: "+string);
		System.out.println("Double: "+num_double);
		System.out.println("Int: "+num_int);
		
		scanner.close();
		*/
		
		
		Scanner scanner = new Scanner(System.in);
		int num;
		String msg = "";
		
		do {
			num = scanner.nextInt();
		}while(num<1 || num>100);
		
		if(num%2 == 1) {
			msg = "Weird";
		}else {
			if(num>=2 && num<=5) {
				msg = "Nos Weird";
			}else if(num>=6 && num<=20) {
				msg = "Weird";
			}else if(num>20) {
				msg = "Not Weird";
			}
		}
		
		System.out.println(msg);
		
	}

}
