import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactComponent = ({ contactos, cambiarEstado, eliminarContacto }) => {

  return (
    <div>
      <h2>Lista de Contactos</h2>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Conectado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, indice) => (
            <tr key={indice}>
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td>
              <td>{contacto.email}</td>
              <td>{contacto.conectado ? 'Conectado' : 'Desconectado'}</td>
              <td>
                {contacto.conectado ? <i className="bi bi-cloud-sun"  style={{color: 'blue'}} onClick={() => cambiarEstado(indice)}></i>:<i className="bi bi-cloud-moon"  style={{color: 'tomato'}} onClick={() => cambiarEstado(indice)}></i>}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => eliminarContacto(indice)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactComponent.propTypes = {
  contactos: PropTypes.arrayOf(Contacto).isRequired,
  cambiarEstado: PropTypes.func.isRequired,
  eliminarContacto: PropTypes.func.isRequired,
};

export default ContactComponent;