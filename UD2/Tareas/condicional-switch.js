/*
    EJERCICIO CONDICIONAL SWITCH
    Andrés Francisco Caruncho Faci

*/

let nota = parseFloat(prompt("Introduce la nota numérica del alumno:"));
let resultado;

switch (true) {
    case (nota >= 9 && nota <= 10):
        resultado = "Sobresaliente";
        break;
    case (nota >= 7):
        resultado = "Notable";
        break;
    case (nota >= 6):
        resultado = "Bien";
        break;
    case (nota >= 5):
        resultado = "Suficiente";
        break;
    case (nota >= 0 && nota < 5):
        resultado = "Insuficiente";
        break;
    default:
        resultado = "Nota no válida";
}

alert(resultado);