public class Solution{
    public static void main(String[] args){
        int[] number = setArray(args);

        solution(number);
    }

    public static int[] setArray(String[] A){
        int[] number = new int[A.length];

        if (A.length > 0) {
            for (int i = 0; i < A.length; i++) {                
                try {
                    number[i] = Integer.parseInt(A[i]);
                } catch (NumberFormatException e) {
                    System.err.println("Argument" + A[i] + " must be an integer.");
                    System.exit(1);
                }
            }
        }
        else{
            System.err.println("Pass a space-separated list of values");
            System.exit(1);
        }

        return number;
    }
 
    public static int solution(int[] A){
        for (int i = 0; i < A.length; i++) {
                    
            int testNumber = A[i];
            
            for (int j = i + 1; j < A.length; j++) {
                int nextNumber = A[j];

                if(testNumber == nextNumber){
                    A = delete(A, j);
                    break;
                }    
           } 
        }

        System.out.println(A[A.length - 1]);
        
        return A[A.length - 1];
    }

    public static int[] delete(int[] arr, int index){
        int[] newArray = new int[arr.length - 1];
 
        for (int i = 0, k = 0; i < arr.length; i++) {
            if (i == index) continue;
            
            newArray[k++] = arr[i];
        }

        return newArray;
    }
}

/********************************************************************************************
 * References:                                                                              *
 *                                                                                          *
 * https://docs.oracle.com/javase/tutorial/essential/environment/cmdLineArgs.html           *                           *
 * https://www.geeksforgeeks.org/remove-an-element-at-specific-index-from-an-array-in-java/ * 
 * Java Como programar - Deitel 10ª edição                                                  *
 *                                                                                          *                 
 *******************************************************************************************/