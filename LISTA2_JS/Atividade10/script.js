    function len(){
        var phrase = "";
        var phrases = window.prompt("Digite uma frase: ");

        for(i = 0; i <= phrases.length - 1; i++ ){
            if (phrases[i] !== " "){
            phrase += phrases[i];
            }
        }
        console.log(phrase.length);
    }
len();