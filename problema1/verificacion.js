const USUARIO_REGISTRADO = "Fede";
const CONTRASENIA_REGISTRADA = "123";
const IMG_INGRESO_CORRECTO = "https://assets.mubicdn.net/images/notebook/post_images/28772/images-w1400.png";
const IMG_INGRESO_ERROR = "https://i.kym-cdn.com/photos/images/facebook/001/552/014/b38.jpg";

let usuarioIngresado = "usuario por defecto";
let contraseniaIngresada = "contraseña por defecto";
let cantIntentos = 0;

function verificar(){
    usuarioIngresado = document.querySelector(`#usuario_ingresado`).value;
    contraseniaIngresada = document.querySelector(`#contrasenia_ingresada`).value;

    if (usuarioIngresado == USUARIO_REGISTRADO && contraseniaIngresada == CONTRASENIA_REGISTRADA) {
        document.querySelector(`#mensaje_resultado`).innerHTML = `
        <h1 style="place-items: center;"> usuario ${USUARIO_REGISTRADO} bienvenido! </h1>
        <img src=${IMG_INGRESO_CORRECTO} alt="imagen bienvenido"></img>
        ` ;
        cantIntentos = 0;
        } else {
            cantIntentos++;
            document.querySelector(`#mensaje_resultado`).innerHTML = `
            <h1> usuario y/o contraseña incorrectos! </h1>
            <h4> Intentos: ${cantIntentos} </h4>
            <img src=${IMG_INGRESO_ERROR} alt="imagen "></img>
            `  
        }
}