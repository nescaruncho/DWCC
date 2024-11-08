/* 
   EJERCICIO AMBITO DE VARIABLES

   Andrés Francisco Caruncho Faci
*/

// Variable global
var nombre = "Global var";

function mostrarVariables() {
    // Variable local a la función
    var nombre = "Local var";
    console.log("Dentro de la función, var nombre:", nombre);

    if (true) {
        // Variable local al bloque
        let nombre = "Block let";
        console.log("Dentro del bloque, let nombre:", nombre);
    }

    console.log("Después del bloque, var nombre:", nombre);

    if (true) {
        // Variable constante local al bloque
        const nombre = "Block const";
        console.log("Dentro del bloque, const nombre:", nombre);
    }

    console.log("Después del bloque, var nombre:", nombre);
}

console.log("Variable global, var nombre:", nombre);
mostrarVariables();
console.log("Variable global después de la función, var nombre:", nombre);