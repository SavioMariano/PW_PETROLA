function factorial(){
    var value = 1;
    var num = window.prompt("Digite um número: ");

    for (i = num; i >= 1; i--){
        
        value *= i;
        console.log(value);

    }
    console.log("Fatorial de " + num + " é " + value );
}
factorial();