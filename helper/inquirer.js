const inquirer = require('inquirer');
require('colors');

/**
 * @type {Array<Object>} Variable de configuración de preguntas para Inquirer
 */
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1.'.green + ' Crear tarea'
            },
            {
                value: '2',
                name: "2.".green + " Listar tareas"
            },
            {
                value: '3',
                name: "3. ".green + "Listar tareas completadas"
            },
            {
                value: '4',
                name: "4.".green + " Listar pendientes"
            },
            {
                value: '5',
                name: "5.".green + " Completar tarea(s)"
            },
            {
                value: '6',
                name: "6.".green + " Borrar tarea"
            },
            {
                value: '0',
                name: "0.".green + " Salir"
            }
        ]
    }
]

/**
 * Función que retorna un modulo para Inquierer que muestra un menú para seleccionar las ociones principales.
 * @returns {Module} Modulo de Inquirer para mostrarlo como interfaz de la consola.
 */
const inquirerMenu = async () => {
    console.log('\x1Bc');

    console.log("===========================".green);
    console.log("  Seleccione una opción".white);
    console.log("===========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

/**
 * Función que muestra un mensaje que pausa el programa y lanza un mensaje de confirmación.
 */
const pausa = async () => {
    await inquirer.prompt([
        {
            type: 'input',
            name: 'enter',
            message: `Presiona ${ 'ENTER'.green } para continuar...`
        }
    ]);
}

/**
 * Función que muestra un input para recibir un texto.
 * @param {String} message String con el mensaje que se va a mostrar.
 * @returns {Module} Modulo de Inquirer para mostrarlo como interfaz de la consola.
 */
const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor, ingresa un valor valido';
                }

                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return  desc;
}

/**
 * Función para listar todas las tareas (completadas y pendientes) en un modulo de Inquirer.
 * @param {Array<Object>} tareas Tareas que se van a listar en la consola.
 * @returns {Module} Modulo de Inquirer para mostrarlo como interfaz de la consola.
 */
const listadoTareasBorrar = async (tareas = []) => {
    /* 
        {
            value: 'tarea.id,
            name: '1.'.green + ' Crear tarea'
        }
    */

    const choices = tareas.map((tarea, key) => {
        return {
            value: tarea.id,
            name: `${String(key + 1).green}. ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas)
    return id;
}

/**
 * Función que muestra un mensaje de confirmación.
 * @param {String} message Texto que se va a mostra como un mensaje de confirmación.
 * @returns {Module} Modulo de Inquirer para mostrarlo como interfaz de la consola.
 */
const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;
}

/**
 * Función para listar las tareas en forma de checkbox en un modulo de Inquirer.
 * @param {Array<Object>} tareas Tareas que se van a listar en la consola.
 * @returns {Module} Modulo de Inquirer para mostrarlo como interfaz de la consola.
 */
const mostrarListadoChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, key) => {
        return {
            value: tarea.id,
            name: `${String(key + 1).green}. ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta)
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}