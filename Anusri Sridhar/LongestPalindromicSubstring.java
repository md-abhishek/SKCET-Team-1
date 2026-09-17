import java.util.Scanner;

public class LongestPalindromicSubstring {

    static String longestPalindrome(String str) {
        if (str == null || str.length() < 2) {
            return str;
        }

        int start = 0;
        int end = 0;

        for (int i = 0; i < str.length(); i++) {
            int len1 = expand(str, i, i);
            int len2 = expand(str, i, i + 1);

            int len = Math.max(len1, len2);

            if (len > end - start + 1) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }

        return str.substring(start, end + 1);
    }

    static int expand(String str, int left, int right) {
        while (left >= 0 && right < str.length()
                && str.charAt(left) == str.charAt(right)) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        System.out.println("Longest palindromic substring: "
                + longestPalindrome(str));

        sc.close();
    }
}