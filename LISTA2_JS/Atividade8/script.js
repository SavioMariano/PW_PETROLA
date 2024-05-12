function cousinOrNot(){
    var number = window.prompt("Digite um número: ");

    if (number % number == 0 && number % 2 == 1){
        return console.log(true);
    }else{
        return console.log(false);
    }
}
cousinOrNot();