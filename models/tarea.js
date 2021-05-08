const { v4: uuidv4 } = require('uuid');

/**
 * Clase para poder generar la estrctura de una nueva tarea.
 */
class Tarea {
    id = '';
    desc = '';
    completadoEn = null;
    /**
     * @param {String} desc Descripción de la tarea
     */
    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
    }
}


module.exports = Tarea;