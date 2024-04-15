document.getElementById('tabuadinha').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    let num = document.getElementById('insirir').value;

    for (let numero = 1; numero <= 10; numero++){
        console.log("tabuada de " + num +": "+(num*numero ) + "");
    }
});
