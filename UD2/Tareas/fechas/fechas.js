/*
    EXERCICIO CALCULANDO DATAS
    Andrés Francisco Caruncho Faci
*/

function diferenciaFechas() {
    // Obtener los valores de los campos de entrada
    const fecha1 = document.getElementById('fecha1').value;
    const fecha2 = document.getElementById('fecha2').value;
    const milisegundos1 = document.getElementById('milisegundos1').value;
    const milisegundos2 = document.getElementById('milisegundos2').value;

    let date1, date2;

    // Comprobar si se han introducido fechas en formato de milisegundos
    if (milisegundos1 && milisegundos2) {
        // Convertir los milisegundos a objetos Date
        date1 = new Date(parseInt(milisegundos1));
        date2 = new Date(parseInt(milisegundos2));
    } else if (fecha1 && fecha2) {
        // Convertir las fechas en formato YYYY-MM-DD a objetos Date
        date1 = new Date(fecha1);
        date2 = new Date(fecha2);
    } else {
        alert("Por favor, introduce ambas fechas o ambas en milisegundos.");
        return;
    }

    // Calcular la diferencia en milisegundos y convertirla a días
    const diferenciaMilisegundos = Math.abs(date2 - date1);
    const diferenciaDias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    // Mostrar la diferencia de días
    alert(`La diferencia entre las dos fechas es de ${diferenciaDias} días.`);
}
