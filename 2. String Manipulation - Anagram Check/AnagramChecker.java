import java.util.Arrays;
import java.util.Scanner;

public class AnagramChecker {
    public static boolean checkAnagram(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();
        
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);
        
        return Arrays.equals(charArray1, charArray2);
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter first string:");
        String str1 = scanner.nextLine();
        
        System.out.println("Enter second string:");
        String str2 = scanner.nextLine();
        
        boolean result = checkAnagram(str1, str2);
        System.out.println("Are the strings anagrams? " + result);
        
        scanner.close();
    }
}