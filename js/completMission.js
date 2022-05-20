const producao = document.querySelector("#producao");
const main = document.querySelector("#main");
const body = document.querySelector("#body");

producao.addEventListener("click", (e) => {
  main.style.display = "none";
  body.style.background = "url(../img/parabens.png)";
  body.style.backgroundSize = "";
});
