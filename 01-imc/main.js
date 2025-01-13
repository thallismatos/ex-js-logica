/* Você precisa criar uma função chamada calcularIMC que calcule o IMC de um usuário com base no peso e altura fornecidos. Além disso, ao clicar em um botão, o programa deve automaticamente preencher um campo de texto (textarea) informando se o usuário está acima do peso, com peso normal ou abaixo do peso, de acordo com o valor do IMC calculado. */

let button = document.getElementById("calculate");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const height = parseFloat(
    document.getElementById("height").value.replace(",", ".")
  );
  const weight = parseFloat(
    document.getElementById("weight").value.replace(",", ".")
  );
  const output = document.getElementById("output");

  if (name === "" || /\d/.test(name) || isNaN(height) || isNaN(weight)) {
    output.value = "Preencha todos os campos corretamente!";
    output.style.color = "red";
    return;
  } else {
    const imc = (weight / height ** 2).toFixed(2);
    const classificacao = classificarIMC(imc);

    output.style.color = "black";
    output.value = `${name}, Seu IMC é ${imc}! ${classificacao}`;
  }
});

function classificarIMC(imc) {
  let classificacao;

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc >= 35 && imc <= 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III ou mórbida";
  }

  return classificacao;
}
