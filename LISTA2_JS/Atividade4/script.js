document.getElementById('inverter').addEventListener('submit', function(event){
    event.preventDefault();

    var reverse = document.getElementById("words-reverse");
    var word = document.getElementById("words").value;
    var value = "";

    for(var i = word.length - 1; i >= 0; i-- ){
        value += word[i];
    }
        reverse.value = value;

    if (reverse.value === word){
        console.log(true);
    }else{
        console.log(false);
    }

});