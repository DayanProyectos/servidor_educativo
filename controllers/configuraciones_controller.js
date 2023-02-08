const Configuracion = require('../models/configuracion');

module.exports = {
    async getAll(req, res, next) {
        try{
            const data = await Configuracion.getAll();
            console.log(`Configuraciones: ${data}`);
            return res.status(200).json(data);
        }catch(error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener las configuraciones',
                error: error
            });
        }
    },

    async findByUser(req, res, next) {
        const usuario = req.params.usuario;
        try{
            const data = await Configuracion.findByUser(usuario);
            console.log(`Configuraciones: ${data}`);
            return res.status(200).json(data);
        }catch(error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: `Error al obtener la configuracion de ${usuario}`,
                error: error
            });
        }
    },

    async create(req, res, next) {
        try{
            const configuracion = req.body;
            const data = await Configuracion.create(configuracion);
            return res.status(201).json({
                success: true,
                message: 'Se agrego correctamente',
                data: data.id
            });
        }catch(error){
            console.log(`Error: ${error}`);
            res.status(501).json({
                success: false,
                message: 'Error al agregar',
                error: error
            });
        }
    }

}