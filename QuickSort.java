class QuickSort {

    int[] arr;

    public static void main(String[] args){
        int[] arrays = {322,2,3,4,6,1,2,3,4,32,232,434,1,2323,2342,323};

        qsort(arrays, 0, arrays.length-1);
        
        print(arrays);
    }

    static void qsort(int[] arrays, int start, int end){
        if(start < end){
            int pivot = arrays[start];
            int left = start , right = end, index = start;
            while(right > index){
                if(arrays[right] < pivot){
                    //swap
                    arrays[index] = arrays[right];
                    index = right;
                    arrays[right] = pivot;
                    break;
                }
                right--;
            }
            while(left < index){
                if(arrays[left] > pivot){
                    //swap
                    arrays[index] = arrays[left];
                    index = left;
                    arrays[left] = pivot;
                    break;
                }
                left++;
            }
            qsort(arrays, start, index-1);
            qsort(arrays, index+1, end);
        }
    }



     static void print(int[] arrays){
        for(int i = 0; i < arrays.length; i++){
            System.out.print(arrays[i] + ",");
        }
        System.out.println();
    }
}