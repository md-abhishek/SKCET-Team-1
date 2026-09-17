import java.util.*;
class Main
{
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        
        System.out.print("Enter Size of the Array:");
        int n = in.nextInt(); 
        
        System.out.println("Enter Array Elements:");
        int[] a = new int[n];
        for(int i=0;i<n;i++)
        {
            a[i] = in.nextInt();
        }
        
        if(isSorted(a))
        {
            System.out.println("Array is sorted in Ascending order.");
        }
        else
        {
            System.out.println("Array is unordered.");    
        }
    }
    public static boolean isSorted(int[] a)
    {
        if(a==null || a.length<=1)
        {
            return true;
        }
        
        for(int i=0;i<a.length-1;i++)
        {
            if(a[i]>a[i+1])
            {
                return false;
            }
        }
        return true;
    }
}
