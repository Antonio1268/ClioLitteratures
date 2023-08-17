import { clientServices } from "./servidor.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const lexico = document.querySelector("[data-lexico]").value;
    
    clientServices.crearProducto(imagen, titulo, lexico).then(respuesta =>{
        window.location.href="productos.html"
    })

});