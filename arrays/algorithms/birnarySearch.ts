/*
* Input:   nums[] = [2, 3, 5, 7, 9] target = 7
* Output: Element found at index 3
* Input:   nums[] = [1, 4, 5, 8, 9] target = 2
* Output: Element not found
*/

console.log('algorytm przeszukiwania binarnego')

const firstNums: number[] = [0, 2, 3, 7, 9];
const secondNums: number[] = [1, 4, 5, 8, 9];

function binarySearch(target: number, array: number[]): number {
    let start: number = 0;
    let end: number = array.length - 1;
    while (start <= end)
    {
        let mid: number = Math.floor((start + end) / 2);
        if(target == array[mid]) {
            return mid;
        }
        if (target < array[mid]) {
            end = mid - 1;
        }
        if (target > array[mid]) {
            start = mid + 1;
        }
    }
    return -1;
}

// @ts-ignore
console.log(binarySearch(7, firstNums));
console.log(binarySearch(2, secondNums))