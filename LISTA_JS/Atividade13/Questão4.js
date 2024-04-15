function  calcularMedia(nota1, nota2, nota3, nome){

    var media = (nota1 + nota2 + nota3) / 3;
    console.log("Nota 1: " + nota1 + " Nota 2: " + nota2 + " Nota 3: " + nota3);
    alert(nome + " sua média é " + media);
}
calcularMedia(5,10,6,"joão");