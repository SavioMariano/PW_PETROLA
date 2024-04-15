document.getElementById('Habilitação').addEventListener("submit", function(event){
    event.preventDefault();

    const idad = document.getElementById('idade').value;
    const habil = document.getElementById('habilitado').checked;
    const nohabil = document.getElementById('nohabilitado').checked;
    
    if(idad >= 18 && habil){
        console.log('dirige ai');
    }else if (idad >= 18 && nohabil){
        console.log('nao podedirigir.');
    }else{
        console.log('digite valor válido')
    }
}); 
