document.getElementById('inverter').addEventListener('submit', function (event) {
    event.preventDefault();

    var reverse = document.getElementById("words-reverse");
    var word = document.getElementById("words").value;
    var values = "";
    var ward = "";

    for (var i = 0; i <= word.length - 1; i++) {
        if (word[i] !== " ") {
            ward += word[i];
        }
    }

    for (var i = word.length - 1; i >= 0; i--) {
        if (word[i] !== " ") {
            values += word[i];
        }
    }

    console.log(ward.replaceAll(/[.:;,]/g, ''));
    console.log(values.replaceAll(/[.:;,]/g, ''));

    reverse.value = values;

    if (values.toLowerCase().replaceAll(/[.:;,]/g, '') === ward.toLowerCase().replaceAll(/[.:;,]/g, '')) {
        console.log(true);
    } else {
        console.log(false);
    }

});

