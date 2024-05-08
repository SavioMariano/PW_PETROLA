function media(number){
    var values = 0;
    for(var i = 1; i <= number; i++){
        var grades = parseFloat(window.prompt("digite a "+ i + "° nota"));
        
        if(!isNaN(grades) && grades >= 0){
        values += grades;
        } else{
            console.log("Somente números")       
        }
    }
    
    console.log("A média é "+(values/number));
}
media(5);

