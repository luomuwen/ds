public class InsertionSort{

    public static void main(String[] args){
        int[] array = {7,6,5,5, 2, 8, 9, 0, 10, 4,3,2,1};
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
            for(int j = 0; j < i; j++){
                if(item < array[j]){
                    //挪动元素
                    int head = array[j];
                    array[j] = item;
                    for(int k = j+1; k <=i; k++){
                        int tmp = array[k];
                        array[k] = head;
                        head = tmp;
                    }
                    break;
                }
            }
        }        
    }
}