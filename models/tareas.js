/* 
    _listado:
        { 'uuid-123412312-312423424': { id: 12, desc: 'texto', completadoEn: 92155 } }
        { 'uuid-123412312-312423424': { id: 12, desc: 'texto', completadoEn: 92155 } }
        { 'uuid-123412312-312423424': { id: 12, desc: 'texto', completadoEn: 92155 } }
*/

const Tarea = require("./tarea");

/**
 * Clase para interactuar con las tareas.
 */
class Tareas {
    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach((tareaId) => {
            const tarea = this._listado[tareaId];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        /**
         * Esta variable almacena las tareas ordenadas por su ID.
         * @type {Object} 
         */
        this._listado = {};
    }

    /**
     * Método para borrar una tarea de la lista de tareas de la clase actual.
     * @param {String} id Id de la tarea a borrar de la DB.
     */
    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    /**
     * Método para cargar todas las tareas de la DB a la clase actual. 
     * @param {Array} tareas Array de tareas.
     */
    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    /**
     * Método para crear una nueva tarea en la lista de la clase actual.
     * @param {String} desc Descripción de la tarea que se va a agregar en la DB.
     */
    crearTarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    /**
     * Método para listar todas las tareas en la consola con su descripción, status y fecha de completado
     */
    listadoCompleto() {
        // 1. en verde
        // Completado en verde
        // Pendiente en rojo
        // 1. Alma :: Completada | Pendiente

        if (this.listadoArr.length !== 0) {
            this.listadoArr.forEach((tarea, key) => {
                console.log(`${String(key + 1).green}. ${tarea.desc} :: ${tarea.completadoEn ? 'Completado'.green : 'Pendiente'.red}`);
            });
        } else {
            console.log();
            console.log("No hay tareas");
            console.log();
        }
    }

    /**
     * Método para listar todas las tareas completadas y pendientes dependiendo de la condición dada como paramtro.
     * @param {Boolean} completadas Condicional para ver las tareas completadas o incompletas.
     */
    listarPendientesCompletadas(completadas = true) {
        let contador = 0;

        if (this.listadoArr.length !== 0) {
            this.listadoArr.forEach(tarea => {
                if (completadas) {
                    // TAREAS COMPLETADAS
                    if (tarea.completadoEn) {
                        contador++;
                        console.log(`${String(contador).green}. ${tarea.desc} :: ${String(tarea.completadoEn).green}`);
                    }
                } else {
                    // TAREAS INCOMPLETAS
                    if (!tarea.completadoEn) {
                        contador++;
                        console.log(`${String(contador).green}. ${tarea.desc} :: ${'Pendiente'.red}`);
                    }
                }
            });
        } else {
            console.log();
            console.log("No hay tareas");
            console.log();
        }
        
    }

    /**
     * Método para marcar como completado o no ciertas tareas.
     * @param {Array} ids Array de id's de tareas.
     */
    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];

            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;