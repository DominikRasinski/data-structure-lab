console.log('Zmienne prymitywne');

let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let notDefined: undefined = undefined;
let notPresent: null = null;
// let bigNumber: bigint = 100n;
// let uniqueId: symbol = Symbol("id");

type arrayPrimitiveUnion = number | string | boolean | undefined | null | bigint | symbol; 

const arrayPrimitive: Array<arrayPrimitiveUnion> = [isDone, decimal, color, notDefined, notPresent];
for (let i: number = 0; i < arrayPrimitive.length; i++) {
    console.log(arrayPrimitive[i]);
}