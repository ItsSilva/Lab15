const fieldset00 = document.getElementById("fieldset00");
const fieldset01 = document.getElementById("fieldset01");
const fieldset02 = document.getElementById("fieldset02");
const fieldset03 = document.getElementById("fieldset03");
const fieldset04 = document.getElementById("fieldset04");
const fieldset05 = document.getElementById("fieldset05");
const fieldset06 = document.getElementById("fieldset06");
const fieldset07 = document.getElementById("fieldset07");
const fieldset08 = document.getElementById("fieldset08");
const fieldset09 = document.getElementById("fieldset09");

let activados = 0;
let desactivados = 0;

const tarea00 = "Create new project";
const estadoTarea00 = false;

if (estadoTarea00) {
    activados = activados + 1;
    fieldset00.innerHTML = `<label class='activado'>${tarea00}</label><input type='checkbox' class='activado boton' /input>`;
} else{
    desactivados = desactivados + 1;
    fieldset00.innerHTML = `<label class='desactivado'>${tarea00}</label><input type='checkbox' class='desactivado check' /input>`;
};

const tarea01 = "Working call";
const estadoTarea01 = false;


if (estadoTarea01){
    activados = activados + 1;
    fieldset01.innerHTML = `<label class='activado' >${tarea01}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset01.innerHTML = `<label class='desactivado'>${tarea01}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea02 = "Meet with doctor";
const estadoTarea02 = false;

if (estadoTarea02){
    activados = activados + 1;
    fieldset02.innerHTML = `<label class='activado' >${tarea02}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset02.innerHTML = `<label class='desactivado'>${tarea02}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea03 = "Go to the shop";
const estadoTarea03 = false;

if (estadoTarea03){
    activados = activados + 1;
    fieldset03.innerHTML = `<label class='activado' >${tarea03}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset03.innerHTML = `<label class='desactivado'>${tarea03}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea04 = "Take the kids to school";
const estadoTarea04 = false;

if (estadoTarea04){
    activados = activados + 1;
    fieldset04.innerHTML = `<label class='activado' >${tarea04}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset04.innerHTML = `<label class='desactivado'>${tarea04}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea05 = "Finish the marathon";
const estadoTarea05 = false;

if (estadoTarea05){
    activados = activados + 1;
    fieldset05.innerHTML = `<label class='activado' >${tarea05}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset05.innerHTML = `<label class='desactivado'>${tarea05}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea06 = "Walk the dog";
const estadoTarea06 = false;

if (estadoTarea06){
    activados = activados + 1;
    fieldset06.innerHTML = `<label class='activado' >${tarea06}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset06.innerHTML = `<label class='desactivado'>${tarea06}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea07 = "Play WarZone";
const estadoTarea07 = false;

if (estadoTarea07){
    activados = activados + 1;
    fieldset07.innerHTML = `<label class='activado' >${tarea07}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset07.innerHTML = `<label class='desactivado'>${tarea07}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea08 = "Take a ride on the Yamaha R1M";
const estadoTarea08 = false;

if (estadoTarea08){
    activados = activados + 1;
    fieldset08.innerHTML = `<label class='activado' >${tarea08}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset08.innerHTML = `<label class='desactivado'>${tarea08}</label><input type='checkbox' class='desactivado check' />`;
};

const tarea09 = "Bedtime";
const estadoTarea09 = false;

if (estadoTarea09){
    activados = activados + 1;
    fieldset09.innerHTML = `<label class='activado' >${tarea09}</label><input type='checkbox' class='activado' />`;
} else{
    desactivados = desactivados + 1;
    fieldset09.innerHTML = `<label class='desactivado'>${tarea09}</label><input type='checkbox' class='desactivado check' />`;
};

const contador = document.getElementById("contador");
// Seleccionar todos los elementos <input> dentro de los fieldset
const inputs = document.querySelectorAll('fieldset input');

// Iterar sobre cada input
inputs.forEach((input, index) => {
    // Agregar un event listener para el evento 'change'
    input.addEventListener('change', () => {
        // Recalcular la cantidad de tareas activadas y desactivadas
        let activados = 0;
        let desactivados = 0;

        if (index === 0) {
            fieldset00.classList.toggle('activado');
        } else{
            fieldset00.classList.toggle('desactivado');
        };

        if (index === 1) {
            fieldset01.classList.toggle('activado');
        } else{
            fieldset01.classList.toggle('desactivado');
        };

        if (index === 2) {
            fieldset02.classList.toggle('activado');
        } else{
            fieldset02.classList.toggle('desactivado');
        };

        if (index === 3) {
            fieldset03.classList.toggle('activado');
        } else{
            fieldset03.classList.toggle('desactivado');
        };

        if (index === 4) {
            fieldset04.classList.toggle('activado');
        } else{
            fieldset04.classList.toggle('desactivado');
        };

        if (index === 5) {
            fieldset05.classList.toggle('activado');
        } else{
            fieldset05.classList.toggle('desactivado');
        };

        if (index === 6) {
            fieldset06.classList.toggle('activado');
        } else{
            fieldset06.classList.toggle('desactivado');
        };

        if (index === 7) {
            fieldset07.classList.toggle('activado');
        } else{
            fieldset07.classList.toggle('desactivado');
        };

        if (index === 8) {
            fieldset08.classList.toggle('activado');
        } else{
            fieldset08.classList.toggle('desactivado');
        };

        if (index === 9) {
            fieldset09.classList.toggle('activado');
        } else{
            fieldset09.classList.toggle('desactivado');
        };

        // Iterar sobre los inputs nuevamente y contar cuántos están marcados
        inputs.forEach(input => {
            if (input.checked) {
                activados++;
            } else {
                desactivados++;
            }
        });

        // Actualizar el contenido del contador
        contador.innerHTML = "La cantidad de tareas completadas es de " + activados + " y la cantidad de tareas sin completar es de " + desactivados + ".";
    });
});

