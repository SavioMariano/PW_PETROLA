function calcAreaTriangle(){
    var base = window.prompt("Digita a base do triangulo: ");
    var heigth = window.prompt("Digita a altura do triangulo: ");

    if (!isNaN(base) && !isNaN(heigth)){
        console.log("A altura é: "+heigth);
        console.log("A base é: "+base);
        alert(" A Area do triangulo é "+ (base*heigth)/2)
    }else{
        alert("Digite um valor válido.");
    }

}
calcAreaTriangle();