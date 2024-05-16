const form = document.getElementById('todoForm');
        const messageDiv = document.getElementById('message');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const todoInput = document.getElementById('todo');
            const todoText = todoInput.value.trim();

            if (todoText) {
                // Guardar el TODO en el localStorage
                const todos = JSON.parse(localStorage.getItem('todos')) || [];
                todos.push(todoText);
                localStorage.setItem('todos', JSON.stringify(todos));

                // Limpiar el campo de entrada
                todoInput.value = '';

                // Mostrar el mensaje de confirmación
                messageDiv.textContent = 'TODO guardado correctamente';
                messageDiv.style.color = 'green';
            } else {
                // Mostrar un mensaje de error si el campo está vacío
                messageDiv.textContent = 'Por favor, escribe una tarea';
                messageDiv.style.color = 'red';
            }
        });