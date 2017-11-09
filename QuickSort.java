/**
 * 
 */
class QuickSort {

    int[] arr;

    public static void main(String[] args){
        int[] arrays = {4,3,2,1,1,2,3,4};

        qsort(arrays, 0, arrays.length-1);
        
        print(arrays);
    }

    static void qsort(int[] arrays, int start, int end){
        if(start < end){
            int left = parition(arrays, start, end);
            qsort(arrays, start, left-1);
            qsort(arrays, left+1, end);
        }
    }


    static int parition(int[] arr, int start, int end){
        int pivot = arr[start];
        int i = start, j = start + 1;
        while(j<=end){
            if(arr[j] < pivot){
                i++;
                int temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp; 
            }
            j = j+1;
        }

        int temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        return i;
    }



     static void print(int[] arrays){
        for(int i = 0; i < arrays.length; i++){
            System.out.print(arrays[i] + ",");
        }
        System.out.println();
    }
}