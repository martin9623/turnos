// Obtener referencias a los elementos del DOM
const numberElement = document.querySelector('.number');
const body = document.getElementById('body')
const audio = new Audio('sound.mp3')

function playSound1() {
  audio.play();
}

// Variable para almacenar el número actual
let number = 0;

// Función para actualizar el número en la página
function updateNumber() {
  numberElement.textContent = number;
}

// Función para incrementar el número
function incrementNumber() {
  playSound1()
  number++;
  updateNumber();
}

// Asignar los controladores de eventos a los botones
body.addEventListener('click', incrementNumber);

// Actualizar el número inicial en la página
updateNumber();