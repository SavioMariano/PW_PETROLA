    function len(){
        var phrase = window.prompt("Digite uma frase: ");
        
        console.log("A frase '" + phrase + "' tem " + phrase.split(' ').length + " palavra(s)");
        //.split('') aspas simples juntas conta as caracteres.
        //.split(' ') aspas simples separada conta as palavras.
    }
len();
