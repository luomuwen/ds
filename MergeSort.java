public class MergeSort{

    public static void main(String[] args){
        int[] array = {5,3,4,2,1,0,10,9,6,7,8};
        sort(array);
        for(int i : array){
            System.out.print(i);
            System.out.print(",");
        }
        System.out.println("");
    }

    public static void sort(int[] array){
        int[] reg = new int[array.length];
        mergeSort(array, reg, 0, array.length-1);
        for(int i : reg){
            System.out.print(i);
            System.out.print(",");
        }
        System.out.println("");
    }

    private static void mergeSort(int[] array, int[] reg, int start, int end){
        if(start >= end){
            return;
        }
        int mid = (end - start) /2 + start;
        int start1 = start;
        int start2 = mid + 1;
        int end1 = mid;
        int end2 = end;
        mergeSort(array, reg, start1, end1);
        mergeSort(array, reg, start2, end2);

        int i = start;
        while(start1 <= end1 && start2 <= end2){
            reg[i++] = array[start1] < array[start2] ? array[start1++] : array[start2++];
        }
        while(start1 <= end1){
            reg[i++] = array[start1++];
        }
        while(start2 <= end2){
            reg[i++] = array[start2++];
        }

        int k = start;
        for(; k <= end ; k++){
            array[k] = reg[k];
        }
    }

}