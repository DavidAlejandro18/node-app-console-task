require('colors');
const { guardarDB, leerDB } = require('./helper/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helper/inquirer');
const Tareas = require('./models/tareas');
console.log('\x1Bc');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        // ESTABLECER LAS TAREAS
        tareas.cargarTareasFromArray(tareasDB);
    }

    //await pausa();

    do {
        // IMPRIMIR EL MENU
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción');

                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;

            case '3':
                // TAREAS COMPLETADAS
                tareas.listarPendientesCompletadas();
            break;

            case '4':
                // TAREAS INCOMPLETAS
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                // COMPLETADO | PENDIENTE
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;

            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const okey = await confirmar("¿Estas seguro?");
                    if (okey) {
                        tareas.borrarTarea(id);
                        console.log("Tarea borrada".red);
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr);
        
        await pausa();
    } while (opt !== '0');
}

main();