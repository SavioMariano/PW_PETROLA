function evenORodd(){
    var value = window.prompt("Digita um número ae: ");

    if (value % 2 === 0){
        return console.log(true);
    }else if (value % 2 === 1){
        return console.log(false);
    }else{
        return console.log("Insira um valor válido");
    }
}
evenORodd();