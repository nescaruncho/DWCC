/*
    EJERCICIO BUCLES ANIDADOS
    Andrés Francisco Caruncho Faci
*/

//Crear una función que reciba un texto y devuelva un array con las letras del texto
function splitLetters(word) {
    return word.split('');
}

//Crear una función que reciba un texto y devuelva el texto sin vocales
function removeVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // Array con las vocales
    let result = ''; // Variable para guardar el texto resultante

    let words = text.split(' '); // Array con las palabras del texto
    let i = 0; // Inicializar un contador

    // Recorrer el array de palabras
    while (i < words.length) {
        let letters = splitLetters(words[i]); // Array con las letras de la palabra

        // Recorrer el array de letras
        for (let j = 0; j < letters.length; j++) {
            // Comprobar si la letra no es una vocal
            if (!vowels.includes(letters[j])) {
                result += letters[j]; // Añadir la letra a la variable result
            }
        }
        result += ' '; // Añadir un espacio al final de cada palabra
        i++;
    }

    return result.trim(); // Devolver el texto resultante sin espacios al principio ni al final
}

// Solicitar un texto al usuario
let userInput = prompt("Introduce un texto:");

// Llamar a la función removeVowels y mostrar el resultado en una ventana emergente
let textWithoutVowels = removeVowels(userInput);
alert(textWithoutVowels);