/* pode ser 4 imagens, posso criar um array para pecorrer e tentar trabalhar nelas com temporizador para mudar de uma para outra quando clica no auto, fazendo um loop infinito até clicar no parar */

/* adicionar evento de click em cada um dos botoes */

/* adicionar evento de click no botão auto para fazer um loop infinito */

const imgs = [
  "img/desligado.png",
  "img/vermelho.png",
  "img/amarelo.png",
  "img/verde.png",
];

const img = document.querySelector("#img");
const verde = document.querySelector("#verde");
const amarelo = document.querySelector("#amarelo");
const vermelho = document.querySelector("#vermelho");
const auto = document.querySelector("#automatico");
const pare = document.querySelector("#pare");

function mudarImg(color) {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].includes(color)) {
      return imgs[i];
    }
  }
  return imgs[0];
}

verde.addEventListener("click", () => {
  img.src = mudarImg("verde");
  disableButtons();
});

amarelo.addEventListener("click", () => {
  img.src = mudarImg("amarelo");
  disableButtons();
});

vermelho.addEventListener("click", () => {
  img.src = mudarImg("vermelho");
  disableButtons();
});

let intervalId;

auto.addEventListener("click", () => {
  let j = 0;
  intervalId = setInterval(() => {
    img.src = imgs[j];
    j = (j + 1) % imgs.length;
  }, 2000);
  disableButtons();
});

pare.addEventListener("click", () => {
  clearInterval(intervalId);
  img.src = mudarImg("desligado");
  enableButtons();
});

function disableButtons() {
  verde.disabled = true;
  amarelo.disabled = true;
  vermelho.disabled = true;
  auto.disabled = true;
}

function enableButtons() {
  verde.disabled = false;
  amarelo.disabled = false;
  vermelho.disabled = false;
  auto.disabled = false;
}
