function calc() {
    
    let a = document.getElementById("a").value
    let operacion = document.getElementById("op").value
    let b = document.getElementById("b").value

    let result = eval(a, operacion, b)

    document.write(result)
}