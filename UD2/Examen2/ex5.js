function ordenarCadena(cadena) {
    // Verificar si la cadena está vacía
    if (!cadena) {
        return "";
    }

    // Dividir la cadena en palabras
    const palabras = cadena.split(" ");

    // Verificar que todas las palabras contienen un número
    palabras.forEach(palabra => {
        if (!/\d+/.test(palabra)) {
            throw new Error("Todas las palabras deben contener un número.");
        }
    });

    // Extraer los números de las palabras
    const numeros = palabras.map(palabra => parseInt(palabra.match(/\d+/)[0], 10));

    // Verificar que los números son consecutivos
    numeros.sort((a, b) => a - b);
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] < 1 || numeros[i] > 9) {
          throw new Error("Solo puedes introducir números entre 1 y 9");
        }

        if (numeros[i] + 1 !== numeros[i + 1]) {
            throw new Error("Los números no son consecutivos o están incompletos.");
        }
    }

    // Ordenar las palabras en base al número que contienen
    const palabrasOrdenadas = palabras.sort((a, b) => {
        const numeroA = a.match(/\d+/)[0]; // Extraer el número de la palabra a
        const numeroB = b.match(/\d+/)[0]; // Extraer el número de la palabra b
        return numeroA - numeroB; // Comparar los números
    });

    // Unir las palabras ordenadas en una sola cadena y retornarla
    return palabrasOrdenadas.join(" ");
}

// Ejemplos de uso
console.log(ordenarCadena("este2 e1s T4est u3n")); // Salida: "e1s este2 u3n T4est"
console.log(ordenarCadena("4de pa1ra ge6nte b3ien l5a el2")); // Salida: "pa1ra el2 b3ien 4de l5a ge6nte"
console.log(ordenarCadena("")); // Salida: ""