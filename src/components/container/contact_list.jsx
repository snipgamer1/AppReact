import React, { useState } from "react";
import { Contacto } from "../../models/contacto.class";
import ContactComponent from "../pure/contact";
import ContactForm from "../pure/forms/contactForm";


const ContactList = () => {
    const defaultcontact1 = new Contacto("Snip", "Gamer", 'chuchis@hotmail.com', false);
  
    const [contactos, setContactos] = useState([defaultcontact1]);
    const [contact, setContact] = useState(defaultcontact1);
  
    const agregarContacto = (contact) => {
      const tempContact = [...contactos];
      tempContact.push(contact);
      setContactos(tempContact);
    };
  
    const eliminarContacto = (indice) => {
      const nuevosContactos = [...contactos];
      nuevosContactos.splice(indice, 1);
      setContactos(nuevosContactos);
    };
  
    const cambiarEstado = (indice) => {
      const nuevosContactos = [...contactos];
      nuevosContactos[indice].conectado = !nuevosContactos[indice].conectado;
      setContactos(nuevosContactos);
    };
  
    const limpiarFormulario = () => {
      setContact(defaultcontact1);
    };
  
    return (
      <div>
        <ContactComponent
          contactos={contactos}
          cambiarEstado={cambiarEstado}
          eliminarContacto={eliminarContacto}
        />
        <ContactForm agregarContacto={agregarContacto}/>
        
      </div>
    );
  };
  
export default ContactList;