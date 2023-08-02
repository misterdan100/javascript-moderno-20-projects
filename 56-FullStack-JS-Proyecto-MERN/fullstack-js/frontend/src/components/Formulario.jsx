import React from 'react'
import { useState } from 'react'
import Alerta from './Alerta';

const Formulario = () => {
  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState(Date.now());
  const [ sintomas, setSintomas ] = useState('');

  const [ alerta, setAlerta ] = useState({});

  const handleSubmit = e => {
    e.preventDefault();

    //* validar el formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }
  };

  const { msg } = alerta;

  return (
    <>
      <p className='text-lg text-center mb-10'>
          Añade tus pacientes y <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form
        className='bg-white py-10 px-5 mb-10 lg:mb-3 shadow-md rounded-xl'
        onSubmit={handleSubmit}
      >
          <div className='mb-5'>
              <label htmlFor='nombre' 
                className='text-gray-700 uppercase font-bold'
              >Nombre Mascota</label>
              <input
                type="text"
                id='nombre'
                placeholder='Nombre de la Mascota'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl'
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
          </div>

          <div className='mb-5'>
              <label htmlFor='propietario' 
                className='text-gray-700 uppercase font-bold'
              >Nombre Propietario</label>
              <input
                type="text"
                id='propietario'
                placeholder='Nombre del Propietario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl'
                value={propietario}
                onChange={e => setPropietario(e.target.value)}
                />
          </div>

          <div className='mb-5'>
              <label htmlFor='email' 
                className='text-gray-700 uppercase font-bold'
              >Email Propietario</label>
              <input
                type="email"
                id='email'
                placeholder='Email del Propietario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
          </div>

          <div className='mb-5'>
              <label htmlFor='fecha' 
                className='text-gray-700 uppercase font-bold'
              >Fecha de Alta</label>
              <input
                type="date"
                id='fecha'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl'
                value={fecha}
                onChange={e => setFecha(e.target.value)}
              />
          </div>


          <div className='mb-5'>
              <label htmlFor='sintomas' 
                className='text-gray-700 uppercase font-bold'
              >Sintomas</label>
              <textarea
                id='sintomas'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl'
                placeholder='Describe los sintomas...'
                value={sintomas}
                onChange={e => setSintomas(e.target.value)}
              ></textarea>
          </div>

          <input type="submit" value='Agregar Paciente' className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-xl' />
      </form>    

      { msg && <Alerta alerta={alerta} /> }

    </>


  )
}

export default Formulario