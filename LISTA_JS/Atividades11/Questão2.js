document.getElementById('valor').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let valor3 = parseFloat(document.getElementById('valor3').value);
    
    const Soma = (valor1 + valor2 + valor3);
    const Media = ((valor1 + valor2 + valor3)/3);
    const Produto = (valor1 * valor2 * valor3);
    const Min = Math.min(valor1 , valor2 , valor3);
    const Max = Math.max(valor1 , valor2 , valor3);
    
    if (valor1 == valor2 || valor2 == valor3 || valor1 == valor3){
        alert("Você repetiu algum número na digitação");
    }else{
    console.log("A soma dos 3 valores é: " + Soma);
    console.log("A média dos 3 valores é: " + Media);
    console.log("O produto dos 3 valores é: " + Produto);
    console.log("O valor minimo dos 3 valores é: " + Min);
    console.log("O valor máximo dos 3 valores é: " + Max);
    console.log(" ");
    }
});
