console.log('algorytm liniowego sortowania')

const example: number[]  = [3,2,5,7,9,1];

function linearSort(arrayToSort: number[]) {
    for(let i:number = 0; i < arrayToSort.length; i++) {
        let temp: number = 0;
        if(arrayToSort[i] > arrayToSort[i + 1]) {
            temp = arrayToSort[i];
            arrayToSort[i] = arrayToSort[i + 1];
            arrayToSort[i + 1] = temp;
        }
    }
}

linearSort(example);
console.log(example);