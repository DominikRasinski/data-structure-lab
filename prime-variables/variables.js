console.log('Zmienne prymitywne');
var isDone = false;
var decimal = 6;
var color = "blue";
var notDefined = undefined;
var notPresent = null;
var arrayPrimitive = [isDone, decimal, color, notDefined, notPresent];
for (var i = 0; i < arrayPrimitive.length; i++) {
    console.log(arrayPrimitive[i]);
}
