var user = "Fede";
var password = "Costa";

var ingresarUser = prompt("Ingrese nombre de Usuario", "Nombre de usuario");
var ingresarPassword = prompt("Ingrese contraseña", "Contraseña");




if ( ingresarUser == user && ingresarPassword == password ) {
    document.write(`
    <h4>Acceso Concedido<h4>`);
} else {
    document.write(`
    <h4>Acceso Denegado<h4>`);
}