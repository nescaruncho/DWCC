let a;
let b;

function getStrings() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
}

function myLength() {

    getStrings();

    const lengthA = a.length;
    const lengthB = b.length;
    document.getElementById("result").innerHTML = lengthA + lengthB;
}

function myConcat() {

    getStrings();

    const result = a.concat(b);
    document.getElementById("result").textContent = result;

}

function myTrim() {
    
    getStrings();

    let trimA = a.trim();
    let trimB = b.trim();

    const result = trimA.concat(trimB);
    document.getElementById("result").textContent = result;
}

function myToUpper() {
    
    getStrings();

    const result = a.toLocaleUpperCase().concat(b.toLocaleUpperCase());
    document.getElementById("result").textContent = result;
}

function myCharAt() {
    
    getStrings();

    const result = a.charAt(b-1);
    document.getElementById("result").textContent = result;
}



function mySubstr() {
    
    getStrings();

    const result = a.substring(b);
    document.getElementById("result").textContent = result;

}