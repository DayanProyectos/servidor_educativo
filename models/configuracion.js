const db = require('../config/config')

const Configuracion = {};

Configuracion.getAll = () => {
    const sql = `SELECT * FROM configuracion`;

    return db.manyOrNone(sql);
};

Configuracion.findByUser = (usuario) => {
    const sql = `SELECT * FROM configuracion where usuario = $1`;

    return db.oneOrNone(sql, usuario);
};

Configuracion.create = (configuracion) => {
    const sql = `INSERT INTO configuracion( usuario,  capacidadFijo, capacidadCorrido, capacidadParlet, capacidadCentena, pagoFijo, pagoCorrido, pagoParlet, pagoCentena, created_at, updated_at
    ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;`;

    return db.oneOrNone(sql, [configuracion.usuario, configuracion.capacidadFijo, configuracion.capacidadCorrido, configuracion.capacidadParlet, configuracion.capacidadCentena, configuracion.pagoFijo, configuracion.pagoCorrido, configuracion.pagoParlet, configuracion.pagoCentena, new Date(), new Date()]);
};

module.exports = Configuracion;