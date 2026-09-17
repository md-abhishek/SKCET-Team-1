import java.util.Scanner;
class Main 
{
    public static int add(int a, int b) 
    {
        return a + b;
    }

    public static double add(double a, double b) 
    {
        return a + b;
    }

    public static int add(int a, int b, int c) 
    {
        return a + b + c;
    }
    
    public static double add(double a, double b, double c)
    {
        return a + b + c;
    }

    public static void main(String[] args) 
    {
        Scanner in = new Scanner(System.in);

        System.out.print("Enter two integers: ");
        int a = in.nextInt();
        int b = in.nextInt();

        System.out.println("Sum of two integers: " + add(a, b));

        System.out.print("Enter two decimal numbers: ");
        double x = in.nextDouble();
        double y = in.nextDouble();

        System.out.println("Sum of two decimal numbers: " + add(x, y));

        System.out.print("Enter three integers: ");
        int p = in.nextInt();
        int q = in.nextInt();
        int r = in.nextInt();

        System.out.println("Sum of three integers: " + add(p, q, r));
        
        System.out.print("Enter three decimal numbers: ");
        double c = in.nextDouble();
        double d = in.nextDouble();
        double e = in.nextDouble();
        
        System.out.println("Sum of three decimal numbers: " + add(c,d,e));

        in.close();
    }
}
