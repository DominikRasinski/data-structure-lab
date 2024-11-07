console.log("Algorytm porównujący czy dwa podane łańcuchy znaków są takie same");

let exampleString1: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
let exampleString2: string = "Lorem Ipsum is simply dummg text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

function equalitySearch(baseString: string, searchString: string): boolean {
    let i: number = 0;
    if (baseString.length !== searchString.length) {
        return false;
    }
    while(i < baseString.length && baseString[i] === searchString[i]) {
        i += 1;
    }
    return i == baseString.length;
}

// @ts-ignore
console.log(equalitySearch(exampleString1, exampleString2));

//TODO zrobić algorytm zwracający poprawne informacje czyli tekst opisujący powód