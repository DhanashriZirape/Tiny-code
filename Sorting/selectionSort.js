/*Goal: sort array
Sample input: [4,5,2,3,1,10,8,9]
[4,5,2,3,1,10,5,8,9]
*/

function sort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        //find minimum value in rest of array
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        //Swap minimum value with current
        swap(arr, min_index, i);
    }
    return arr;
}

function swap(arr, index1, index2) {
    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
}
const arr = [4, 5, 1, 3, 2, 10, 6, 7, 5]
console.log(sort(arr))
