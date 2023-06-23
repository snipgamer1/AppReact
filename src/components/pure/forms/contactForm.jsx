import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';

const ContactForm = ({ agregarContacto }) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');
    

  function addContact(e) {
    e.preventDefault();
    const nuevoContacto = new Contacto (
      nombreRef.current.value,
      apellidoRef.current.value,
      emailRef.current.value,
      false
    );
    agregarContacto(nuevoContacto);
  };



  return (
    <div>
      <h2>Agregar Contacto</h2>
      <form onSubmit={addContact} >
      
        <div className="mb-3">
          <label for="nombreValue">Nombre:</label>
          <input
           className="form-control" id="nombreValue"
            ref={nombreRef}
            type="text"
            placeholder='Nombre'
          />
        </div>
        <div className="mb-3">
          <label for="apellidoValue">Apellido:</label>
          <input
           className="form-control" id="apellidoValue"
           placeholder='Apellido'
            ref={apellidoRef}
            type="text"
          />
        </div>
        <div>
          <label for="emailValue">Email:</label>
          <input
           className="form-control" id="emailValue"
           placeholder='Email'
            ref={emailRef}
            type="text"
          />
        </div>
        <button type="submit" className='btn btn-success btn-lg ms-2 mt-2'>Agregar</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  agregarContacto: PropTypes.func.isRequired,
};

export default ContactForm;