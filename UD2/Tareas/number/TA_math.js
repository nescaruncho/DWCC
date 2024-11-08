/*
    EJERCICIO USANDO NUMBER
    Andrés Francisco Caruncho Faci
*/

function calc() {
    // Generamos 10 números aleatorios en el rango de 0 a 100
    let numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.random() * 100);
    }

    // Obtenemos el número máximo
    let max = Math.max(...numeros);

    // Calculamos el área del círculo
    let area = Math.PI * Math.pow(max, 2);

    // Redondeamos el área a dos decimales
    let redondeo = Math.round(area * 100) / 100;

    // Mostramos el resultado
    document.getElementById("result").innerText = "Área del círculo: " + redondeo;
}