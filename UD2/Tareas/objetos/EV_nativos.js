/*
    EJERCICIO OBJETOS JAVASCRIPT
    Andrés Francisco Caruncho Faci
*/

// Función que realiza los cambios en el nombre
function changeName() {
    
    let name = document.getElementById("name").value; // Capturamos el nombre
    let surname = document.getElementById("surname").value; // Capturamos el apellido

    name = removeAccents(name.toUpperCase()); // Convertimos el nombre a mayúsculas y eliminamos acentos

    const nameParts = name.split(" "); // Separamos el nombre en partes
    const firstName = nameParts[0]; // Guardamos la primera parte del nombre
    const secondName = nameParts.length > 1 ? nameParts[1][0] + "." : ""; // Guardamos la segunda parte del nombre con un punto si existe

    name = firstName + " " + secondName; // Concatenamos el nombre

    surname = removeAccents(surname.toUpperCase()); // Convertimos el apellido a mayúsculas y eliminamos acentos

    const surnameParts = surname.split(" "); // Separamos el apellido en partes
    const firstSurname = surnameParts[0]; // Guardamos la primera parte del apellido
    const secondSurname = surnameParts.length > 1 ? surnameParts[1][0] + "." : ""; // Guardamos la segunda parte del apellido con un punto si existe

    surname = firstSurname + " " + secondSurname; // Concatenamos el apellido

    let fullName = surname + ", " + name; // Concatenamos el apellido y el nombre

    document.getElementById("fullName").textContent = fullName; // Mostramos el nombre completo
}

// Función que elimina los acentos de una cadena de texto
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Eliminamos los acentos mediante expresiones regulares
}

// Función que realiza los cambios en la fecha
function changeDate() {

    const date = document.getElementById("birth").value.trim(); // Capturamos la fecha

    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/; // Expresión regular para validar la fecha
    const match = date.match(regex); // Comprobamos si la fecha cumple el formato

    if (!match) {
        document.getElementById("age").textContent = "Formato de fecha incorrecto"; // Mostramos un mensaje de error si la fecha no cumple el formato
        return;
    }

    // Guardamos el día, mes y año de la fecha convertidos a enteros
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) -1;
    const year = parseInt(match[3], 10);

    // Creamos un objeto Date con la fecha introducida
    const birthDate = new Date(year, month, day); 

    // Comprobamos si la fecha introducida es válida
    if (birthDate.getDate() !== day || birthDate.getMonth() !== month || birthDate.getFullYear() !== year) {
        document.getElementById("age").textContent = "Fecha incorrecta";
        return;
    }

    const now = new Date(); // Creamos un objeto Date con la fecha actual

    // Calculamos la edad en años y meses
    let ageYears = now.getFullYear() - birthDate.getFullYear();
    let ageMonths = now.getMonth() - birthDate.getMonth();

    // Corregimos la edad si el día actual es menor al día de nacimiento en este mes
    if (now.getDate() < birthDate.getDate()) {
        ageMonths--; // Restamos un mes si no hemos llegado al día del cumpleaños
    }

    // Si la diferencia de meses es negativa, ajustamos el año y los meses
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12; // Ajustamos los meses para no mostrar números negativos
    }

    // Mostramos la edad en años y meses
    document.getElementById("age").textContent = `${ageYears} años y ${ageMonths} meses`;

}