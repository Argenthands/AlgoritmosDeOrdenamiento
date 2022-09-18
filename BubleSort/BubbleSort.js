function BubbleSort(array) {
    let flag = true;
    let len = array.length;
    let aux;
    while (flag) {
        flag = false;
        for (let i=0; i<len; i++){
            if(array[i]>array[i+1]){
                aux = array[i]
                array[i] = array[i+1]
                array[i+1] = aux
                flag = true;
            }
        }
    }
    return array;
}
const arr1 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
console.log(BubbleSort(arr1))