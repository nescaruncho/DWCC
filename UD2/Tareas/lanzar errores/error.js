/*
    EJERCICIO LANZAR ERRORES
    Andrés Francisco Caruncho Faci
*/

// Función para comprobar si el número introducido es válido
function checkErrors() {
    const num = document.getElementById('num').value; // Obtener el número introducido por el usuario
    const result = document.getElementById('result'); // Obtener el elemento donde se mostrará el resultado
    result.innerHTML = ''; // Limpiar el contenido del elemento

    // Comprobar si el número es válido
    try {
        if (num === '') {
            throw new Error('Input is empty'); // Lanzar un error si el número está vacío
        }

        const number = parseInt(num, 10); // Convertir el número a entero

        if (isNaN(number)) {
            throw new Error('Input is not a number'); // Lanzar un error si el número no es un número
        }

        if (number < 1 || number > 40) {
            throw new Error('Number is out of range (1-40)'); // Lanzar un error si el número está fuera del rango
        }

        if (number % 2 === 0) {
            throw new Error('Number is not odd'); // Lanzar un error si el número no es impar
        }

        result.innerHTML = 'Valid input: ' + number; // Mostrar el número si es válido
    } catch (error) {
        result.innerHTML = 'Error: ' + error.message; // Mostrar el mensaje de error
    }
}