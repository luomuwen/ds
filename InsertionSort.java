public class InsertionSort{

    public static void main(String[] args){
        int[] array = {0,1,2,3,4,5,6};
        sort(array);
        for(int i : array){
            System.out.print(i);
            System.out.print(",");
        }
        System.out.println("");
    }

    public static void sort(int[] array){
        for(int i = 1; i < array.length; i++){
            int item = array[i];
            int j = i - 1;
            while(j >= 0 && array[j] > item){
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = item;
        }        
    }
}