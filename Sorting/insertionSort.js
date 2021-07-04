/*Goal: sort array
Sample input: [4,5,2,3,1,10,8,9]
[4,5,2,3,1,10,5,8,9]
4,3,2,
*/
/**
 * Insertion sort: usage: sort small set of numbers
 * @param {*} arr 
 * @returns 
 */
function sort(arr){
for(let i=1;i<arr.length;i++){
    //Check current value with all previous values and arrange at correct place 
    for(let j=0;j<i;j++){
        if(arr[i]<arr[j])
            swap(arr,i,j)
    }
}
return arr;
}
function swap(arr, index1, index2){
 const temp = arr[index2];
 arr[index2]=arr[index1];
 arr[index1]=temp;
}
const arr = [4, 5, 1, 3, 2, 10, 6, 7, 5]
console.log(sort(arr))