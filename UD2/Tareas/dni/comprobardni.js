/*
    EJERCICIO COMPROBAR DNI
    Andrés Francisco Caruncho Faci
*/

//Crea un array con las posibles letras que puede tener un DNI ordenadas en posiciones determinadas
const letrasDNI = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

//Función que obtiene la letra del DNI según el número introducido
function obtenerLetra() {

    //Creación de una varible para guardar el número introducido en el input
    let numeroDNI = document.getElementById("numdni").value;

    //Comprobación de que cumple los parámetros (8 dígitos sin letra) mediante una expresión regular
    if (/^\d{8}$/.test(numeroDNI)) {
        
        //Conversión en integer (para mayor seguridad) y guardamos en otra variable
        let numero = parseInt(numeroDNI);

        //Obtenemos la letra realizando la operación de resto y obteniendo la posición del array como número entero
        let letra = letrasDNI[numero%23];

        //Mostramos el DNI completo en una ventana emergente
        alert(`El DNI completo es: ${numeroDNI}-${letra}`);

    } else {
        //Si la comprobación lanza error, se lanza mensaje de error en una ventana emergente
        alert("DNI introducido no válido. Recuerda introducir solo 8 dígitos sin letra.")
    }
}