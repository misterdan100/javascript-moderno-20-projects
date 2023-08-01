import React from 'react'

const Formulario = () => {
  return (
    <>
    <p className='text-lg text-center mb-10'>
        Añade tus pacientes y <span className='text-indigo-600 font-bold'>Administralos</span>
    </p>

    <form>
        <div className='mb-5'>
            <label >Nombre Mascota</label>
            <input type="text" id='mascota' placeholder='Nombre de la Mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl' />
        </div>
    </form>    
    </>


  )
}

export default Formulario


//! video 009 minuto 2.13