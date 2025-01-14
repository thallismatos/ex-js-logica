/* quando clicar no button de ligar, muda o caminho da imagem */
/* quando ficar apertando ligar e desligar varias vezes, a lampada quebrar */

const buttonLigar = document.querySelector("#ligar");
const buttonDesligar = document.querySelector("#desligar");
const lampada = document.querySelector("#lampada");
const erroMensagem = document.querySelector("#erroMensagem");
const restaurar = document.querySelector("#restaurar");

let contadorCliques = 0;

buttonLigar.addEventListener("click", () => {
  if (contadorCliques < 5) {
    lampada.src = "./img/ligada.jpg";
    lampada.classList.remove("desligada");
    lampada.classList.add("ligada");

    buttonLigar.disabled = true;
    buttonDesligar.disabled = false;

    contadorCliques++;
  } else if (contadorCliques === 5) {
    quebrarLampada();
  }
});

buttonDesligar.addEventListener("click", () => {
  if (contadorCliques < 5) {
    lampada.src = "./img/desligada.jpg";
    lampada.classList.remove("ligada");
    lampada.classList.add("desligada");

    buttonLigar.disabled = false;
    buttonDesligar.disabled = true;

    contadorCliques++;
  } else if (contadorCliques === 5) {
    quebrarLampada();
  }
});

function quebrarLampada() {
  lampada.src = "./img/quebrada.jpg";
  buttonLigar.disabled = true;
  buttonDesligar.disabled = true;

  erroMensagem.style.display = "block";
  restaurar.style.display = "block";
}

function restaurarLampada() {
  lampada.src = "./img/desligada.jpg";
  buttonLigar.disabled = false;
  buttonDesligar.disabled = true;

  erroMensagem.style.display = "none";
  restaurar.style.display = "none";
  contadorCliques = 0;
}
