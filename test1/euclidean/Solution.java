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
 * Reference:                                                                              *
 *                                                                                          *
 * Java Como programar - Deitel 10ª edição                                                  *
 *                                                                                          *                 
 *******************************************************************************************/
