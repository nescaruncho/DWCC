/*
    EJERCICIO ESTRUCTURAS REPETITIVAS FOR-OF Y FOR-IN
    Andrés Francisco Caruncho Faci
*/

// Solicitar un texto al usuario
let texto = prompt("Introduce un texto:");

// Crear un array con las letras del texto
let letras = texto.split("");

// Inicializar una variable para el texto sin vocales
let textoSinVocalesForOf = "";

// Recorrer el array usando for-of
for (let letra of letras) {
    // Comprobar si la letra es una vocal
    if ("aeiouAEIOU".includes(letra)) {
        continue; // Saltar las vocales
    }
    // Añadir la letra a la variable textoSinVocales
    textoSinVocalesForOf += letra;
}

// Mostrar el texto sin vocales en una ventana emergente
alert(textoSinVocalesForOf);

// Solicitar un texto al usuario de nuevo
texto = prompt("Introduce un texto:");

// Inicializar una variable para el texto sin vocales
let textoSinVocalesForIn = "";

//Recorrer el array usando for-in
for (let indice in letras) {
    let letraIn = letras[indice];
    // Comprobar si la letra es una vocal
    if ("aeiouAEIOU".includes(letraIn)) {
        continue; // Saltar las vocales
    }
    // Añadir la letra a la variable textoSinVocales
    textoSinVocalesForIn += letraIn;
}

// Mostrar el texto sin vocales en una ventana emergente
alert(textoSinVocalesForIn);
