import { clientServices } from "./servidor.js";

const formularioContacto = document.querySelector("[data-form-contacto]");

formularioContacto.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre-contacto]").value;
    const mensaje = document.querySelector("[data-mensaje-contacto]").value;
    
    clientServices.recibirMensaje(nombre, mensaje)
     

});