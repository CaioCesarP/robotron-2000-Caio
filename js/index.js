const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};
const estatisticas = document.querySelectorAll("[data-estatistica]");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    montagemButtons(event.target.dataset.controle, event.target.parentNode);
    atualizaEstatisticas(
      event.target.dataset.peca,
      event.target.dataset.controle
    );
  });
});

const montagemButtons = (operation, control) => {
  const peca = control.querySelector("[data-contador]");

  operation === "-"
    ? (peca.value = parseInt(peca.value) - 1)
    : (peca.value = parseInt(peca.value) + 1);
};

const atualizaEstatisticas = (peca, operation) => {
  estatisticas.forEach((element) => {
    operation === "-"
      ? (element.textContent =
          parseInt(element.textContent) -
          pecas[peca][element.dataset.estatistica])
      : (element.textContent =
          parseInt(element.textContent) +
          pecas[peca][element.dataset.estatistica]);
  });
};
