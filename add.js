// Selecciona el formulario y el elemento div donde se mostrará el mensaje
const form = document.querySelector('form');
const messageDiv = document.getElementById('message');

// Agrega un event listener al formulario para escuchar el evento de envío
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue

  // Obtiene el valor del campo de texto
  const todoInput = document.getElementById('todo');
  const todoText = todoInput.value.trim();

  // Valida que se haya ingresado un valor
  if (todoText !== '') {
    // Guarda el nuevo TODO en el localStorage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));

    // Muestra un mensaje de éxito
    messageDiv.textContent = 'TODO guardado correctamente';
    messageDiv.style.color = 'green';

    // Limpia el campo de texto
    todoInput.value = '';
  } else {
    // Muestra un mensaje de error
    messageDiv.textContent = 'Por favor, ingresa una tarea';
    messageDiv.style.color = 'red';
  }
});
