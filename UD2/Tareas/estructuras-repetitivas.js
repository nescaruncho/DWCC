/*
    EJERCICIO ESTRUCTURAS REPETITIVAS
    Andrés Francisco Caruncho Faci
*/

// Solicitar un texto al usuario
let inputText = prompt("Introduce un texto:");
// Crear una variable para guardar el texto resultante
let resultText = "";
//Inicializar un contador
let i = 0;

while (i < inputText.length) {
    let char = inputText.charAt(i);
    if ("aeiouAEIOU".includes(char)) {
        i++;
        continue;
    }
    resultText += char;
    i++;
}

alert("Texto sin vocales: " + resultText);