/* quando clicar no button de ligar, muda o caminho da imagem */
/* quando ficar apertando ligar e desligar varias vezes, a lampada quebrar */

const buttonLigar = document.querySelector("#ligar");
const lampada = document.querySelector("#lampada");
const erroMensagem = document.querySelector("#erroMensagem");

let contadorCliques = 1;

buttonLigar.addEventListener("click", gerenciarLampada);

function gerenciarLampada() {
  if (contadorCliques < 5) {
    if (lampada.src.includes("desligada.jpg")) {
      lampada.src = "./img/ligada.jpg";
      buttonLigar.innerHTML = "Desligar";
    } else if (lampada.src.includes("ligada.jpg")) {
      lampada.src = "./img/desligada.jpg";
      buttonLigar.innerHTML = "Ligar";
    }
    contadorCliques++;
  } else {
    quebrarLampada();
  }
}

function quebrarLampada() {
  lampada.src = "./img/quebrada.jpg";
  buttonLigar.innerHTML = "Trocar Lâmpada";
  erroMensagem.style.display = "block";

  buttonLigar.removeEventListener("click", gerenciarLampada);
  buttonLigar.addEventListener("click", restaurarLampada);
}

function restaurarLampada() {
  lampada.src = "./img/desligada.jpg";
  buttonLigar.innerHTML = "Ligar";
  erroMensagem.style.display = "none";
  contadorCliques = 0;

  buttonLigar.removeEventListener("click", restaurarLampada);
  buttonLigar.addEventListener("click", gerenciarLampada);
}
