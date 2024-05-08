function media(number){
    var value = "";
    // var number = document.getElementById('valor').value;
    for(var i = 1; i <= number; i++){
        let grades = window.prompt("digite a "+ i + "° nota");
        value += grades;

    }
    console.log(parseFloat(value/number));
}
media(3);