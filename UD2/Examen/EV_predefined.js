function calc() {
  let n1 = document.getElementById("a").value;
  let operacion = document.getElementById("op").value;
  let n2 = document.getElementById("b").value;

  if (n1 == "" || n2 == "") {
    alert("Introduce dos números");
    return;
  } else {
    let a = parseFloat(n1);
    let b = parseFloat(n2);

    let result = 0;

    if (isNaN(a) || isNaN(b)) {
      alert("Introduce números válidos");
      return;
    } else if (operacion == "") {
      alert("Introduce una operación");
      return;
    } else if (
      operacion == "+" ||
      operacion == "-" ||
      operacion == "*" ||
      operacion == "/"
    ) {
      switch (operacion) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b != 0) {
            result = a / b;
          } else {
            alert("No se puede dividir por 0");
          }
          break;
        default:
          alert("Operación no válida");
          break;
      }
    } else {
      alert("Operación no válida");
      return;
    }
    let resultado = String(result);
    document.getElementById("res").innerHTML = resultado;
  }
}
