var hayVerduras = true;
var hayPollo = true;
var hayCarne = true; 
var hayAgua = true;
var hayCondimentos = true;
var hayCubito = true;

var sopa = `<img src="https://www.hola.com/imagenes/cocina/recetas/20171013100547/receta-sopa-pollo/0-741-140/sopa-pollo-m.jpg" alt="" srcset="">`

if (hayVerduras == true && (hayPollo == true || hayCarne ==true) && hayAgua == true && (hayCondimentos == true || hayCubito == true)){
    document.write(`Hay Sopita
    <br>
    ${sopa}`);
} else {
    document.write(`No hay sopita :(`);
}