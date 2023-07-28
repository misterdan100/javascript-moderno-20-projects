// import { restart } from 'nodemon';
import Veterinario from '../models/Veterinario.js'

const registrar = async (req, res) => {
    const { email } = req.body;

    //! Revisar usuarios duplicados
    //* buscar por email en la base de datos
    const existeUsuario = await Veterinario.findOne({ email });
    //* findOne busca un registro por clave y valor

    if(existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({msg:error.message});
    }


    try {
        //* Guardar un Nuevo Veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();

        res.json(veterinarioGuardado)

    } catch (error) {
        console.log(error);
    }



};

const perfil = (req, res) => {
    res.json({msg: 'Mostrando Perfil'})
};

const confirmar = async (req, res) => {
    const { token } = req.params;
    const usuarioConfirmar = await Veterinario.findOne({ token });
    
    if(!usuarioConfirmar) {
        const error = new Error('Token no valido');
        return res.status(404).json({msg: error.message})
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();

        res.json({msg: 'usuario confirmado correctamente'})
    } catch (error) {
        console.log(error);
    }

}

export {
    registrar,
    perfil,
    confirmar
}