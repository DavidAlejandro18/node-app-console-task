const fs = require('fs');
const archivo = './db/data.json';

/**
 * Función para guardar todas las tareas en la base de datos local. 
 * @param {Array<Object>} data Array de objetos donde contiene tareas.
 */
const guardarDB = (data) => {
    data = JSON.stringify(data);

    fs.writeFileSync(archivo, data);
}

/**
 * Función para leer la base de datos local.
 * @returns {Object} Objeto de tareas guardadas en la base de datos local.
 */
const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        const archivoInicial = `[]`;
        fs.writeFileSync(`./db/data.json`, archivoInicial);
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    //console.log(data);
    return data;
}


module.exports = {
    guardarDB,
    leerDB
}