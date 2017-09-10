class SelectSort{

    public static void main(String[] args){

        int[] arr = {5, 4, 3, 2, 1, 0, 6};
        sort(arr);
        for(int i : arr){
            System.out.println(i);
        }
    }

    public static void sort(int[] arr){
        for(int i = 0; i < arr.length; i++){
            int min = arr[i];
            int index = i;
            for(int j = i + 1; j < arr.length; j++){
                if(arr[j] < min){
                    min = arr[j];
                    index = j;
                }
            }
            //swap
            arr[index] = arr[i];
            arr[i] = min;
        }
    }


}