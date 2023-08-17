const listaLibros= () => 
  fetch(" http://localhost:3000/libros").then((respuesta) => respuesta.json());

const crearProducto = (imagen, titulo, lexico) =>{
    fetch(" http://localhost:3000/libros",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({imagen, titulo, lexico})
    })
  }

const recibirMensaje = (nombre, mensaje) =>{
    return fetch(" http://localhost:3000/contacto",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({nombre, mensaje})
    })
    .then(response => response.json())
}

const eliminarCliente = (id) =>{
  console.log("Eliminar a", id)
  return fetch (`http://localhost:3000/libros/${id}`, {
    method: "DELETE"
  })
}

const detalleProducto = (id) =>{
  return fetch(`http://localhost:3000/libros/${id}`).then((respuesta) => respuesta.json());
};


const actualizarProducto= (imagen, titulo, lexico, id) =>{
  return fetch (`http://localhost:3000/libros/${id}`,{
    method: "PUT",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({imagen, titulo, lexico}),
  })
  .then((respuesta) => console.log(respuesta))
  .catch((err) => console.log(err));
}

export const clientServices = {
    listaLibros,
    crearProducto,
    recibirMensaje,
    eliminarCliente,
    detalleProducto,
    actualizarProducto
  }
  