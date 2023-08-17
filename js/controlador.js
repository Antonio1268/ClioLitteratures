import { clientServices } from "./servidor.js";

const crearNuevaLinea = (imagen, titulo, lexico) => {
    const linea = document.createElement("div");
    linea.classList.add("elementos__container");
    const contenido = `
    <img src= "${imagen}" alt="" class="portada__libros cruz__roja-port">
    <h1 class="titulo__libros cruz__roja">${titulo}</h1>
    <p class="descripcion__libros">${lexico}</p>
    <button class="buton__productos"><span class="icono__producto"><ion-icon name="play-forward-outline"></ion-icon></span>Leer muestra</button>
    `;
    linea.innerHTML= contenido;
    return linea
};

const table = document.querySelector("[data-table]");


clientServices.listaLibros().then((data)=>{
    data.forEach(({imagen, titulo, lexico}) => {
      const nuevaLinea = crearNuevaLinea(imagen,titulo, lexico); 
      table.appendChild(nuevaLinea);
    })
    console.log(crearNuevaLinea);
  }).catch((error) => alert("Ocurrio un error"));
  


