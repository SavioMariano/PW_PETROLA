document.getElementById('Habilitação').addEventListener("submit", function(event){
    event.preventDefault();

    const idad = document.getElementById('idade').value;
    
    if(idad >= 18){
        console.log('dirige ai');
    }else if(idad < 18){
        console.log('nao podedirigir.');
    }else{
        console.log('invalido');
    }
});
