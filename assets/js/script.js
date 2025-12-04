// 1. Contador de clics
const btnClick = document.getElementById("btn-click");
const counterSpan = document.getElementById("counter");

// Variable para guardar el número de clics
let counter = 0;

// Cuando se hace clic en el botón, aumentamos el contador
btnClick.addEventListener("click", () => {
  counter++;
  counterSpan.textContent = counter;

  console.log("Hiciste clic. Contador:", counter);
});

// 2. Cambiar mensaje de texto
const btnMessage = document.getElementById("btn-message");
const messageParagraph = document.getElementById("message");

// Flag para alternar mensajes
let isOriginal = true;

btnMessage.addEventListener("click", () => {
  if (isOriginal) {
    messageParagraph.textContent = "Mensaje cambiado con JavaScript 😏";
  } else {
    messageParagraph.textContent =
      "Este texto se puede cambiar con JavaScript.";
  }

  isOriginal = !isOriginal; // invertimos el estado
});
