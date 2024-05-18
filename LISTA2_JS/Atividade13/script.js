function getArmstrongNumber() {
  var num = window.prompt("Digite um número:");
  var numMOD = num.split("").length;
  var value = 0;

  for (var i = 0; i < numMOD; i++) {
    value += parseInt(num[i]) ** numMOD;
  }

  if (value == num) {
    console.log("O número " + num + " é um número de Armstrong");
  } else {
    console.log("O número " + num + " não é um número de Armstrong");
  }
  
}
getArmstrongNumber();
