/*
    EJERCICIO CONVERSIÓN DE TIPOS DE DATOS
    Andrés Caruncho Faci
*/

//Conversión automática
/* 
    Operador de strings
    Transforma a strings diferentes tipos al "sumarlos" con una cadena de texto
 */
let a = 2 + "8"; //Transforma número a cadena
console.log(a);

let b = 2 + 8 + "0"; //Transforma suma a cadena, añadiendo cadena al final
console.log(b);

let c = "" + 1; //Convierte número a cadena al sumarlo a una cadena vacía
console.log(c);

let d = false + "1"; //Convierte y añade boolean a cadena
console.log(d);

/*
    Operadores aritméticos
    Transforma a número diferentes tipos
*/

let uno = "4" * 5; //Convierte cadena en número y lo multiplica
console.log(uno);

let dos = true + 14; //Convierte boolean en número (1) y lo suma
console.log(dos);

let tres = +"7"; //Lo transforma en número
console.log(typeof tres);

/* 
    Operadores relacionales
    Transforma la comparación en un boolean
*/

console.log("1">6);
console.log("0"<true);

//Conversión a texto

/*
    Método toString()
*/

console.log((1+9).toString());

/*
    Constructor String()
*/

console.log(new String(1+9));

//Conversión a número
/*
    Método parseInt()
*/
console.log(parseInt(1.4));
/*
    Constructor Number()
*/

console.log(Number(2));

//Conversión a boolean
console.log(Boolean(5));
console.log(Boolean(""));