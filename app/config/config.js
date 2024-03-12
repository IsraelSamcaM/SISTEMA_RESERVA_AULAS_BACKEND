const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'roundhouse.proxy.rlwy.net',
    password: 'aCcdAB*6fEb*EgFG3fgA3GG*gb52bGeE',
    database: 'railway',
    port: '43822'
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.stack);
        return;
    }
    console.log('Conexión exitosa a la base de datos!');
    release();
});

module.exports = pool;