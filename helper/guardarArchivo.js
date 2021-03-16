const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = (data) => {
    data = JSON.stringify(data);

    fs.writeFileSync(archivo, data);
}

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