public class Solution{
    public static void main(String[] args){
        int N = Integer.parseInt(args[0]);
        int M = Integer.parseInt(args[1]);

        solution(N, M);
    }
 
    public static int solution(int N, int M){
        boolean[] A = new boolean[N];
        int totChoco = 0;
        int i = 0;
        boolean wrapper = false;

        while (true) {
            if(A[i]) break;
            
            A[i] = true;            

            totChoco++;
           
            if(i + M >= N){
                i = i + M - N;
            } else i+=M;
        }
        
        System.out.println(totChoco);
        
        return totChoco;
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