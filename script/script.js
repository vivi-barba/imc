function calculoImc(){
  var inpWeight = document.getElementById("weight");
  var inpHeight = document.getElementById("height");

  var imc = inpWeight / (inpHeight * inpHeight);

  imc.innerHTML = calculoImc;
}

console.log(calculoImc());
     // function calculoImc(altura, peso) {
      // imc = peso / (altura * altura);
        //mostra("Seu imc é " + Math.round(imc));
      //}
      // var peso = 61;
      // var altura = 1.71;
      // var imc = peso / (altura * altura);

      //calculoImc(1.71, 61);