console.log('Algorytm przeszukiwania liniowego')

/*
* Input:   nums[] = [2,3,24,7,8,10] target = 8
* Output: Element found at index 4
* Input:   nums[] = [1, 4, 5, 8, 9] target = 2
* Output: Element not found
*/

const example1: number[] = [2,3,24,7,8,10];
const target: number = 8;

const example2: number[] = [1,4,5,8,9];
const target1: number = 2;

function linearSearch(array: number[], target: number): number {
    for(let i: number = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i; //zwrocenie indeksu na ktorym lezy szukana
        }
    }
    return -1;
}

console.log(linearSearch(example1, target));
console.log(linearSearch(example2, target1));