document.getElementById('calcular').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let celsius = document.getElementById('celsius').value;

    const F = ((celsius * 9/5) + 32);
    document.getElementById('resultado').innerHTML = (F + "°F");
});
