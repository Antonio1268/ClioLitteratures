import { clientServices } from "./servidor.js";

const formulario= document.querySelector("[data-form-editar]");

const obtenerInformacion = ()=>{
    const url= new URL(window.location)
    const id= url.searchParams.get("id");

    if(id === null){
        ;
    }
    const imagen = document.querySelector("[data-imagen-editar]")
    const titulo= document.querySelector("[data-titulo-editar]")
    const lexico= document.querySelector("[data-lexico-editar]")

    clientServices.detalleProducto(id).then(libros => {
        imagen.value= libros.imagen;
        titulo.value= libros.titulo;
        lexico.value= libros.lexico;

    });
}

obtenerInformacion()


formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const url= new URL(window.location)
    const id= url.searchParams.get("id");

    const imagen = document.querySelector("[data-imagen-editar]").value;
    const titulo= document.querySelector("[data-titulo-editar]").value;
    const lexico= document.querySelector("[data-lexico-editar]").value;


    clientServices.actualizarProducto(imagen, titulo, lexico, id).then(respuesta =>{
        window.location.href="productos.html"
    })

})
