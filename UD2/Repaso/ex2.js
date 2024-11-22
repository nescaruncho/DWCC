function alphabeticalOrder(params) {
    let word = prompt("Introduce una palabra:");
    let ordered = word.split('').sort().join('');
    alert(ordered);
}

alphabeticalOrder();