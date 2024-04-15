document.getElementById('Votar').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let idade = document.getElementById('birth').value;
    let ano = 2024;

    if (ano - idade >= 18) {
        console.log('Pode votar');
    }else if (ano - idade < 18) {
        console.log('não pode votar');
    }else{
        console.log('digite um valor valido');
    }
});
