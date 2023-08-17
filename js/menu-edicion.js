import { clientServices } from "./servidor.js";

const crearNuevaLinea = (imagen, titulo, lexico, id) => {
    console.log(id)
    const linea = document.createElement("div");
    linea.classList.add("elementos__container");
    const contenido = `
    <a class="boton__editar-dos" href="/editar_cliente.html?id=${id}">Editar</a>
    <img src= "${imagen}" alt="" class="portada__libros cruz__roja-port">
    <h1 class="titulo__libros cruz__roja">${titulo}</h1>
    <p class="descripcion__libros">${lexico}</p>
    <button class="buton__productos-dos" type=button id="${id}">Eliminar</button>
    `;
    linea.innerHTML= contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", ()=>{
      const id= btn.id;
      console.log("click", id)
      clientServices
        .eliminarCliente(id)
        .then((respuesta) => {
          console.log(respuesta)
      }).catch((err) => alert("Ocurrio un error"))
    })
    return linea

};

const table = document.querySelector("[data-table]");


clientServices.listaLibros().then((data)=>{
    data.forEach(({imagen, titulo, lexico, id}) => {
      const nuevaLinea = crearNuevaLinea(imagen,titulo, lexico, id); 
      table.appendChild(nuevaLinea);
    })
    console.log(crearNuevaLinea);
  }).catch((error) => console.log("Ocurrio un error en la creacion de la tabla"));

  


