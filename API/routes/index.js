
const express = require('express');
const router = express.Router();
const pacienteController=require('../controllers/pacienteControllers');
const bodyParser= require('body-parser')

// END POINTS 
module.exports= function(){

  
    //Agrega pacientes via post 
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );
    //OB TIENE TODOS LOS REGISTROS DE LA BASE DE DATOS
    router.get('/pacientes',
        pacienteController.obtenerPacientes

    );
    //obtiene un paciente en especifico (ID)
    router.get('/paciente/:id',
        pacienteController.obtenerPaciente
    )
    //actualizar un registro con un id especifico 
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );
    // elimina un paciente por su ID
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    
    );

    return router;

}