import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './components/container/componenteA';
import {Contacto} from './models/contacto.class'
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Greetingstyled from './components/pure/greetingStyled';
import Clock from './components/container/clock';
import Father from './components/container/father';
import ContactList from './components/container/contact_list';
import Optionalrender from './components/pure/optionalRender';
import RenderSqr from './components/container/renderElem';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import Taskformik from './components/pure/forms/taskFormik';


function App() {
  // const ejemploContacto = new Contacto('Juan', 'Pérez', 'juan@example.com', true);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* Component propio geetig */}
        {/* <Greeting name='Snip'></Greeting> */}
        {/* componente de ejemplo Funcional */}
        {/* <GreetingF name='Snip'></GreetingF> */}
        {/* Componente de listad de Tareas */}
        <TaskListComponent></TaskListComponent>
        {/* Ejercicios 1, 2, 3*/}
        {/* <ComponenteA contacto={ejemploContacto}></ComponenteA> */}
        {/* Ejemplo de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Snip'> */}
        {/* Todo loq ue hay aquí, es tratado como props.children */}
          {/* <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <Greetingstyled name='Snip'></Greetingstyled> */}
        {/* Ejercicios 4, 5, 6*/}
        {/* <Clock></Clock> */}

      {/* </header> */}
      {/* <Father></Father> */}
      {/* Ejercicios 7, 8, 9*/}
      {/* <ContactList/> */}
      {/* <Optionalrender/>
      <RenderSqr/> */}
      {/* Ejemplos uso de formik y yup */}
      <Loginformik/>
      <Registerformik/>
      {/* <Taskformik/> */}
    </div>
  );
}

export default App;
