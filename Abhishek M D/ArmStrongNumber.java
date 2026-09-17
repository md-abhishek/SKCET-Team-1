import java.util.*;
class Main
{
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        
        System.out.println("Enter a number to check Armstrong:");
        int n = in.nextInt();
        
        if(isArmstrong(n))
        {
            System.out.println(n+" is an Armstrong Number.");
        }
        else
        {
            System.out.println(n+" is not an Armstrong number."); 
        }
    }
    public static boolean isArmstrong(int n)
    {
        int original = n;
        int sum = 0;
        
        int digits = (int)Math.log10(n)+1;
        
        while(n>0)
        {
            int remainder = n%10;
            sum += Math.pow(remainder,digits);
            n /= 10;
        }
        
        return sum==original;
    }
}
