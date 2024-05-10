document.getElementById('inverter').addEventListener('submit', function(event){
    event.preventDefault();

    var word = document.getElementById("words").value;
    var value = "";

    for(var i = word.length - 1; i >= 0; i-- ){
        value += word[i];
    }
        console.log(value);
});