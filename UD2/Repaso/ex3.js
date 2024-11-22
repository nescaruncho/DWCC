function countVowels() {
    let text = prompt("Introduce un texto");
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text.includes(vowels[i])) {
            count++;
        }        
    }

    alert(`El texto introducido tiene ${count} vocales`);
}

countVowels();