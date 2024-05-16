// Obtener los TODOs del localStorage
const todos = JSON.parse(localStorage.getItem('todos')) || [];

// Seleccionar el contenedor donde se mostrarán los TODOs
const todosContainer = document.getElementById('todos-container');
const contador = document.getElementById('contador');

let activados = 0;
let desactivados = 0;

// Crear un elemento para cada TODO y agregarlo al contenedor
todos.forEach((todo, index) => {
  const todoElement = document.createElement('div');
  todoElement.classList.add('todo-item');

  const todoLabel = document.createElement('label');
  todoLabel.textContent = todo;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('todo-checkbox');

  // Verificar el estado guardado en el localStorage
  if (localStorage.getItem(`todo-${index}`) === 'true') {
    checkbox.checked = true;
    todoLabel.classList.add('activado');
    activados++;
  } else {
    checkbox.checked = false;
    todoLabel.classList.add('desactivado');
    desactivados++;
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      todoLabel.classList.remove('desactivado');
      todoLabel.classList.add('activado');
      activados++;
      desactivados--;
      localStorage.setItem(`todo-${index}`, 'true');
    } else {
      todoLabel.classList.remove('activado');
      todoLabel.classList.add('desactivado');
      activados--;
      desactivados++;
      localStorage.setItem(`todo-${index}`, 'false');
    }
    localStorage.setItem('todos', JSON.stringify(todos));
    contador.innerHTML = "La cantidad de tareas completadas es de " + activados + " y la cantidad de tareas sin completar es de " + desactivados + ".";
  });

  todoElement.appendChild(todoLabel);
  todoElement.appendChild(checkbox);
  todosContainer.appendChild(todoElement);
});

contador.innerHTML = "La cantidad de tareas completadas es de " + activados + " y la cantidad de tareas sin completar es de " + desactivados + ".";

// Agregar evento de clic al botón "Agregar tarea nueva"
const botonAgregarTarea = document.querySelector('.button-3');
botonAgregarTarea.addEventListener('click', () => {
  window.location.href = './add.html';
});
