/**
 * 计数排序
 */
public class CountingSort{

    public static void main(String[] args){
        int[] array = {2,5,3,0,2,3,0,3};
        int[] result = sort(array, 5);
        for(int i : result){
            System.out.println(i);
        }
    }

    public static int[] sort(int[] array, int max){
        int[] countArray = new int[max+1];
        int[] result = new int[array.length];
        for(int i = 0; i < array.length; i++){
            countArray[array[i]] = countArray[array[i]] + 1;
        }
        for(int i = 1; i < countArray.length; i++){
            countArray[i] = countArray[i] + countArray[i-1];
        }
        for(int i = array.length - 1; i >= 0; i--){
            // System.out.println(countArray[array[i]]);
            result[countArray[array[i]]- 1] = array[i];
            countArray[array[i]] = countArray[array[i]] - 1;
        }
        return result;
    }

}