/*
    EJERCICIO CONDICIONAL IF-ELSE
    Andrés Francisco Caruncho Faci
*/

let nota = parseFloat(prompt("Introduce la nota numérica del alumno:"));
let resultado;

if (nota >= 9 && nota <= 10) {
    resultado = "Sobresaliente";
} else if (nota >= 7) {
    resultado = "Notable";
} else if (nota >= 6) {
    resultado = "Bien";
} else if (nota >= 5) {
    resultado = "Suficiente";
} else if (nota < 5 && nota >= 0) {
    resultado = "Insuficiente";
} else {
    resultado = "Nota no válida";
}

alert(resultado);