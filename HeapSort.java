/**
 *  堆排序
 */
public class HeapSort{

    public static void main(String[] args){
        int[] array = {1,2,3,4,5,6,7};
        sort(array);
        for(int i : array){
            System.out.println(i);
        }
    }

    public static void sort(int[] array){
        int end = array.length - 1;
        while(end > 0 ){
            buildHeap(array, 0, end);
            int temp = array[end];
            array[end] = array[0];
            array[0] = temp;
            end--;
        }
    }

    public static void buildHeap(int[] array, int start, int end){
        if(start >= end){
            return ;
        }
        for(int i = (end - start)/2 ; i >= 0 ; i--){
            maxHeap(array, i, start, end);
        }
    }

    public static void maxHeap(int[] array, int i, int start, int end){
        int left = 2*i + 1;
        int right = 2*i + 2;
        int largest = i;
        if(left <= end && array[left] > array[largest]){
            largest = left;
        }
        if(right <=end && array[right] > array[largest]){
            largest = right;
        }
        int temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        if(largest != i){
            maxHeap(array, largest, start, end);
        }
    }


}