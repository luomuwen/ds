class BubbleSort{

    public static void main(String[] args){
        int[] arrays = {1,121,232,434,334,3,45,100};
        System.out.println("before sort:");
        print(arrays);

        sort(arrays);

        System.out.println("after sort:");
        print(arrays);
    }

    static void print(int[] arrays){
        for(int i = 0; i < arrays.length; i++){
            System.out.print(arrays[i] + ",");
        }
        System.out.println();
    }

    static void sort(int[] arrays){
        for(int i = 0; i < arrays.length - 1; i++){
            for(int j = 0; j < arrays.length - 1 - i; j++){
                if(arrays[j] > arrays[j+1]){
                    int temp = arrays[j];
                    arrays[j] = arrays[j+1];
                    arrays[j+1] = temp;
                }
            }
        }
    }
}