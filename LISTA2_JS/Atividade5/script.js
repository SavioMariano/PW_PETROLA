function vowels() {
    var vowels = window.prompt("Digite uma palavra: ");

    if (isNaN(vowels)) {
        var onlyVowels = vowels.replaceAll(/[^áéíóúaeiouAEIOU]/g, "");
        console.log("Na palavra '" + vowels + "' existem essas vogais: " + onlyVowels);
    } else {
        console.log("Escreva uma palavra.");
    }
}

vowels();