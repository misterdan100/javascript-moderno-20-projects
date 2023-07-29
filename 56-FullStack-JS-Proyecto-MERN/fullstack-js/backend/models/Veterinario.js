import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import generarId from '../helpers/generarld.js';

//* para darle estructura a la db
const veterinarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: generarId(),
    },
    confirmado: {
        type: Boolean,
        default: false
    },
});

veterinarioSchema.pre('save', async function(next) {
    if(!this.isModified('password')) { //* para que no vuelva a hashear un password que ya este hasheado
        next() //* para que detenga el codigo y salte al siguiente midleware
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

veterinarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password) //* compara el password ingresado con el guardado hasheado retorna true o false
}

//* enviar la estructura a moongose
const Veterinario = mongoose.model("Veterinario", veterinarioSchema);

export default Veterinario;

