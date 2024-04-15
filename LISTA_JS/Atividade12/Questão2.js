document.getElementById('receba').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const valorN = document.getElementById('valorN').value;
    let numeros = '';

    for(let num = 0 ; num<= valorN ; num++){
        numeros += num + ' ';
    }

    document.getElementById('resultado').innerHTML = numeros;
    
});
