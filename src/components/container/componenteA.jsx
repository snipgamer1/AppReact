import React from 'react';
import ComponenteB from '../pure/componenteB';


class ComponenteA extends React.Component {
  render() {
    const { nombre, apellido, email, conectado } = this.props.contacto;

    return (
      <div>
        <h2>Información de contacto:</h2>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Email: {email}</p>
        <ComponenteB contacto={this.props.contacto} />
      </div>
    );
  }
}

export default ComponenteA;
