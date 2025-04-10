// script.js

let valor = "0";
let historico = [];

const displayValor = document.getElementById("valor");
const displayHistorico = document.getElementById("historico");
const modeButton = document.getElementById("modeButton");

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const btnValue = button.getAttribute("data-value");

    if (btnValue === "AC") {
      valor = "0";
      historico = [];
      updateDisplay();
      return;
    }

    if (btnValue === "DEL") {
      valor = valor.slice(0, valor.length - 1);
      if (valor === "") valor = "0";
      updateDisplay();
      return;
    }

    if (btnValue === "=") {
      try {
        const result = eval(valor);
        historico.push(`${valor} = ${result}`);
        if (historico.length > 5) historico.shift(); // Limitar o histórico
        valor = result.toString();
      } catch (e) {
        valor = "Erro";
      }
      updateDisplay();
      return;
    }

    // Lógica para prevenir inserção incorreta de operadores
    if (["+", "-", "*", "/"].includes(btnValue) && ["+", "-", "*", "/"].includes(valor.slice(-1))) {
      return;
    }

    if (valor === "0" && btnValue !== ".") {
      valor = btnValue;
    } else {
      valor += btnValue;
    }

    updateDisplay();
  });
});

function updateDisplay() {
  displayValor.textContent = valor;
  displayHistorico.innerHTML = historico.map(line => `<div>${line}</div>`).join("");
}

modeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Alterar o texto do botão conforme o modo
  if (document.body.classList.contains("dark-mode")) {
    modeButton.textContent = "Light Mode";
  } else {
    modeButton.textContent = "Dark Mode";
  }
});

updateDisplay();
