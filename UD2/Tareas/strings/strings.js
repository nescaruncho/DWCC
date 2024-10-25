/*
    EJERCICIO STRINGS
    Andrés Francisco Caruncho Faci
*/

//Declaración de variables
let a;
let b;

//Función que captura los inputs de texto y los guarda en las variables
function getStrings() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
}

//Función que mide e imprime en pantalla el resultado
function myLength() {

    getStrings();

    const lengthA = a.length;
    const lengthB = b.length;
    document.getElementById("result").innerHTML = lengthA + lengthB;
}

//Función que concatena dos cadenas e imprime en pantalla el resultado
function myConcat() {

    getStrings();

    const result = a.concat(b);
    document.getElementById("result").textContent = result;

}

//Función que elimina espacios a derecha e izquierda, concatena e imprime en pantalla el resultado
function myTrim() {
    
    getStrings();

    let trimA = a.trim();
    let trimB = b.trim();

    const result = trimA.concat(trimB);
    document.getElementById("result").textContent = result;
}

//Función que convierte las cadenas a mayúsculas, las concatena e imprime en pantalla el resultado
function myToUpper() {
    
    getStrings();

    const result = a.toLocaleUpperCase().concat(b.toLocaleUpperCase());
    document.getElementById("result").textContent = result;
}

//Función que imprime en pantalla el caracter según la posición numérica introducida
function myCharAt() {
    
    getStrings();

    const result = a.charAt(b-1);
    document.getElementById("result").textContent = result;
}

//Función que obtiene un Unicode sumando los números introducidos en los inputs e imprime en pantalla el resultado (según el Unicode)
function myFromCharCode() {
    
    getStrings();

    const result = String.fromCharCode(a+b);
    document.getElementById("result").textContent = result;
}

//Función que obtiene la primera posición en la primera cadena del caracter o cadena introducidos en el segundo input, e imprime en pantalla el resultado
function myIndexOf() {
    
    getStrings();

    const result = a.indexOf(b);
    document.getElementById("result").textContent = result;
}

//Función que corta una cadena según la posición numérica introducida en el segundo input e imprime en pantalla el resultado
function mySubstr() {
    
    getStrings();

    const result = a.substring(b);
    document.getElementById("result").textContent = result;

}

//Función que compara dos cadenas e imprime por pantalla si son iguales o distintas
function myCompare() {
    
    getStrings();

    const result = a.localeCompare(b);

    if (result == 0) {
        document.getElementById("result").textContent = "Son iguales";
    } else {
        document.getElementById("result").textContent = "Son diferentes";
    }
}

//Función que divide la cadena introducida según el elemento separador introducido en el segundo input e imprime en pantalla el resultado
function mySplit() {
    
    getStrings();

    const result = a.split(b);
    document.getElementById("result").textContent = result;
}

//Función que busca en la primera cadena el caracter o cadena de caracteres introducido en el segundo input e imprime en pantalla la primera posición de aparición
function mySearch() {
    
    getStrings();

    const result = a.search(b);
    document.getElementById("result").textContent = result;
}

//Función que busca en la primera cadena el caracter o cadena de caracteres introducido en el segundo input e imprime en pantalla un array con todas sus ocurrencias
function myMatch() {
    
    getStrings();

    const result = a.match(b);
    document.getElementById("result").textContent = result;
}

//Función que reemplaza en un caracter en una posición determinada previamente de la primera cadena con otro caracter introducido en el segundo input e imprime por pantalla el resultado
function myReplace() {
    
    getStrings();

    const result = a.replace(a[2],b);
    document.getElementById("result").textContent = result;
}