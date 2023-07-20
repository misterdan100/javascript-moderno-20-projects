import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
    //* consultar 3 viajes de modelo Viaje
    try {
        const viajes = await Viaje.findAll( { limit: 3 } );
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes
        })
    } catch (error) {
        console.log(error);
    }

};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
};

const paginaViajes = async (req, res) => {
    //* consultar viajes de la base de datos
    const viajes = await Viaje.findAll();
    // console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    })
};

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
        
    } catch (error) {
        console.log(error);
    }
};

//* Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {

        const viaje = await Viaje.findOne({ where : { slug } });

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
        
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}