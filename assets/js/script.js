// 1. Contador de clics
const btnClick = document.getElementById("btn-click");
const counterSpan = document.getElementById("counter");

// Número de clics
let counter = 0;

btnClick.addEventListener("click", () => {
  counter++;
  counterSpan.textContent = counter;
  console.log("Hiciste clic. Contador:", counter);
});

// 2. Cambiar mensaje de texto
const btnMessage = document.getElementById("btn-message");
const messageParagraph = document.getElementById("message");

// Flag para alternar estado
let isOriginal = true;

btnMessage.addEventListener("click", () => {
  if (isOriginal) {
    messageParagraph.textContent = "Mensaje cambiado con JavaScript 😏";
    messageParagraph.classList.add("cambiado");
  } else {
    messageParagraph.textContent =
      "Este texto se puede cambiar con JavaScript.";
    messageParagraph.classList.remove("cambiado");
  }

  isOriginal = !isOriginal;
});
