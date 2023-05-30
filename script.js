// Obtener referencias a los elementos del DOM
const numberElement = document.getElementById('number');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Variable para almacenar el número actual
let number = 0;

// Función para actualizar el número en la página
function updateNumber() {
  numberElement.textContent = number;
}

// Función para incrementar el número
function incrementNumber() {
  number++;
  updateNumber();
}

// Función para decrementar el número
function decrementNumber() {
  number--;
  updateNumber();
}

// Asignar los controladores de eventos a los botones
incrementButton.addEventListener('click', incrementNumber);
decrementButton.addEventListener('click', decrementNumber);

// Actualizar el número inicial en la página
updateNumber();