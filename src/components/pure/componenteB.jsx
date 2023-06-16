import React from 'react';

class ComponenteB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conectado: this.props.contacto.conectado
    };
  }

  cambiarEstado = () => {
    this.setState(prevState => ({
      conectado: !prevState.conectado
    }));
  }

  render() {
    const estadoContacto = this.state.conectado ? 'Contacto En Línea' : 'Contacto No Disponible';

    return (
      <div>
        <p>Estado: {estadoContacto}</p>
        <button onClick={this.cambiarEstado}>Cambiar Estado</button>
      </div>
    );
  }
}

export default ComponenteB;