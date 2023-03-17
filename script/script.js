function calculoImc(){
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value / 100;

  var imc = peso / (altura * altura);

  document.getElementById("resultado").innerHTML = "seu imc é: " + imc.toFixed(2);
}
