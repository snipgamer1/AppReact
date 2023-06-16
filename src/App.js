import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componenteA';
import {Contacto} from './models/contacto.class'

function App() {
  const ejemploContacto = new Contacto('Juan', 'Pérez', 'juan@example.com', true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Component propio geetig */}
        {/* <Greeting name='Snip'></Greeting> */}
        {/* componente de ejemplo Funcional */}
        {/* <GreetingF name='Snip'></GreetingF> */}
        {/* Componente de listad de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejercicios */}
        
        <ComponenteA contacto={ejemploContacto}></ComponenteA>
        
      </header>
    </div>
  );
}

export default App;
