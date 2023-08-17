const usuarios= [
    {
        nombre: "Juan",
        contraseña: "12345"
    }
]



function login(){

   var users = document.getElementById("usuario").value;
    var pass = document.getElementById("contraseña").value;

    if(users == "Juan" && pass == "12345"){
        window.location.href= "/productos.html";
    }
}