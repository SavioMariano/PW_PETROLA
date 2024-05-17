function getLeastCommomMultiple() {
  var num1 = window.prompt("Digite o primeiro número ");
  var num2 = window.prompt("Digite o segundo número ");
  var mdc = [];
  var mdc2 = [];

  for (var i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
      mdc.push(i);
    }
  }

  for (var i = 1; i <= num2; i++) {
    if (num2 % i == 0) {
      mdc2.push(i);
    }
  }

  var maxMDC = Math.max(...mdc);
  var maxMDC2 = Math.max(...mdc2);

  var mdcFinal = mdc2.find(
    (elemento) =>
      elemento === maxMDC || mdc.find((elemento) => elemento === maxMDC2)
  );

  var mmcFinal = (num1 * num2) / mdcFinal;

  if (mmcFinal) {
    console.log(
      "Menor multiplo comum " + num1 + " e " + num2 + " é " + mmcFinal);
  } else {
    console.log("Não foi possivel encontrar o menor multiplo comum.");
  }
}
getLeastCommomMultiple();
