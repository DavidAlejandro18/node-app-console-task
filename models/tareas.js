/* 
    _listado:
        { 'uuid-123412312-312423424': { id: 12, desc: 'texto', completadoEn: 92155 } }
        { 'uuid-123412312-312423424': { id: 12, desc: 'texto', completadoEn: 92155 } }
        { 'uuid-123412312-312423424': { id: 12, desc: 'texto', completadoEn: 92155 } }
*/

const Tarea = require("./tarea");

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach((tareaId) => {
            const tarea = this._listado[tareaId];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

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