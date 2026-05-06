let relogio = document.getElementById("relogio");
let inicia = document.getElementById("inicia");
let para = document.getElementById("para");
let zera = document.getElementById("zera");
let segundos = 0;
let min = 0;
let horas = 0;
let timer = 0;
function mostrar() {
  relogio.innerHTML = `${String(horas).padStart(2, 0)}:${String(min).padStart(2, 0)}:${String(segundos).padStart(2, 0)}`;
}

let mudarCor = document.getElementById("mudarCor");
mudarCor.addEventListener("click", function () {
  document.body.classList.toggle("BodyWhite");
});

inicia.addEventListener("click", function (event) {
  clearInterval(timer);
  alterarBotao();
  timer = setInterval(function () {
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      min++;
    }

inicia.addEventListener("click", function (event) {
  clearInterval(timer);
  zera.style.display = "none";
  para.style.display = "flex";
  timer = setInterval(function () {
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      horas++;
    }
    mostrar();
  }, 1000);
});

para.addEventListener("click", function () {
  clearInterval(timer);
  zera.style.display = "flex";
  para.style.display = "none";
});

zera.addEventListener("click", function () {
  segundos = 0;
  min = 0;
  horas = 0;
  mostrar();
});