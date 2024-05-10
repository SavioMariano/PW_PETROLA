function average(){
    var values = 0;
    
    var number = window.prompt("Digite a quantidade de números para fazer as médias:");
    
    for(var i = 1; i <= number; i++){
        var grades = parseFloat(window.prompt("digite a "+ i + "° nota"));
        
        if(!isNaN(grades) && grades >= 0){
        values += grades;
        } else{
            console.log("Somente números")       
        }
    }
    console.log("A média é "+(values/number)+ " :)");
};
average(17);