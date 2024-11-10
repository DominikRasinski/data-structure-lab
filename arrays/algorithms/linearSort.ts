console.log('algorytm liniowego sortowania')
const example: number[]  = [3,2,5,7,9,1];

function linearSort(arrayToSort: number[]) {
    for(let i:number = 0; i < arrayToSort.length; i++) {
        for(let j: number = i + 1; j < arrayToSort.length; j++) {
            let temp: number = 0;
            if (arrayToSort[i] > arrayToSort[j]) {
                temp = arrayToSort[i];
                arrayToSort[i] = arrayToSort[j];
                arrayToSort[j] = temp;
            }
        }
    }
}

linearSort(example);
console.log(example);