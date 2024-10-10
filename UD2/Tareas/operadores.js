/*
   EJERCICIO PRECEDENCIA DE OPERADORES
   Andrés Caruncho Faci
*/

//Declaración de variables necesarias

let num1 = 3;
let num2 = 7;

//Mostrar variables por consola

console.log(num1,num2);

//Exponenciación

console.log(num1^num2);

//Suma y multiplicación

let suma = num1+num2;

console.log(suma*num1);

//Resta y división

let division = num2/num1;

console.log(division-num2);

//Coeficiente

console.log(suma%5);

//Relacionales

if (suma > division) {
    console.log("Hola");
} else {
    console.log("Adiós");
}

if (division<10) {
    suma = 2; //Asignación
} else {
    suma = -1;
}

//Lógicos

if (suma = 0 || division<num1) {
    suma++; //Suma unitaria
} else if (suma > 0 && division>num1) {
    console.log(suma*division);
}