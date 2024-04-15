    let normal = "";
    let invert = "";

    for (let num1 = 10; num1 >= 1; num1--){
        normal += num1 + " ";
    }
    

    for (let num2 = 1; num2 <= 10; num2++){
        invert +=num2 + " ";
    }

    document.getElementById("resultado").innerHTML = normal;
    document.getElementById("resultado2").innerHTML = invert;

