function getGreatestCommonDivisor() {
    var num1 = parseInt(window.prompt("Digite um número: "));
    var num2 = parseInt(window.prompt("Digite outro número: ")) ;

    var mdc = [];
    var mdc2 = [];

    for (var i = 1; i <= num1; i++) {
        if (num1 % i == 0) {
            mdc.push(i);
            
        }
    }

    for (var i = 1; i <= num2; i++) {
        if (num2 % i == 0) {
            mdc2.push(i);
        }
    }

    let maxMDC = Math.max(...mdc);
    let maxMDC2 = Math.max(...mdc2);

    const mdcFinal = mdc2.find(element => element === maxMDC || mdc.find(element => element === maxMDC2));

    if(mdcFinal){
        console.log("Maior divisor comum entre " + num1 + " e " + num2 + " é " + mdcFinal)
    }else{
        console.log("Não foi possivel encontrar o maior divisor comum.")
    }
}
getGreatestCommonDivisor();



