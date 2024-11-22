function firtsWordUpperCase() {
    let text = prompt("Introduce un texto");
    let words = text.split(' ');

    let result = "";

    for (let i = 0; i < words.length; i++) {

        let firstLetter = words[i].charAt(0).toUpperCase();
        let others = words[i].slice(1).toLowerCase();

        result = result + firstLetter + others + " ";
        
    }
    
    alert(result);

}

firtsWordUpperCase();