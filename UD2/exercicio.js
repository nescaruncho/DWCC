/* 
   EXERCICIO ENGADIR COMENTARIOS

   Andrés Francisco Caruncho Faci
*/

//Introducir filas
var rows = prompt("How many rows?", 9);
//Introducir columnas
var cols = prompt("How many columns?", 9);

//Lóxica para crear a táboa
if(rows=="" || rows==null)
    rows = 9; //Se non se introduce nada, por defecto 9 filas
if(cols=="" || cols==null)
    cols = 9; //As columnas igual que as filas

//Chamada á función
createTable(rows, cols);

//Función para crear a táboa
/* Esta función vai xerando etiquetas HTML en función dos valores introducidos polo usuario no prompt
Mediante dous bucles xera as columnas e filas necesarias */

function createTable(rows, cols) {
    var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";
    output += "<tr>";
    for(var k=1; k<=cols; k++) {
        output += "<td><b>X " + k + "</b></td>";
    }
    output += "</tr>";
    var j=1;
    for(var i=1;i<=rows;i++) {
        output = output + "<tr>";
        while(j<=cols) {
            output = output + "<td>" + i*j + "</td>";
            j = j+1;
        }
        output = output + "</tr>";
        j = 1;
    }
}