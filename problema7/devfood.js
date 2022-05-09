let tipoProducto = "productoxdefecto";
let esPolloOPescado = "si";
let precioNormal = 0;



function aplicarDescuento(){
    tipoProducto = document.querySelector(`#tipo_producto`).value;
    esPolloOPescado = document.querySelector(`#pollo_o_pescado`).value;
    precioNormal = document.querySelector(`#precio_producto`).value;
    let descuentoCarnes = precioNormal - (precioNormal / 100 * 25);
    let descuentoLacteos =  precioNormal - (precioNormal /100 * 50);
    let descuentoEnlatados = precioNormal - (precioNormal /100 * 70);
    let descuentoPolloOPescado = precioNormal - (precioNormal /100 * 30);
   

    if (tipoProducto == "carne" && esPolloOPescado != "si") {
        document.querySelector(`#mensaje_descuento`).innerHTML = `
    <h1 style="place-items: center;"> Corresponde un 25% de descuento. El precio con descuento es ${descuentoCarnes}  </h1>
    ` ;
    } else if (tipoProducto == "lacteos") {
        document.querySelector(`#mensaje_descuento`).innerHTML = `
        <h1 style="place-items: center;"> Corresponde un 50% de descuento. El precio con descuento es ${descuentoLacteos}  </h1>
        ` ;
    } else if (tipoProducto == "enlatados") {
        document.querySelector(`#mensaje_descuento`).innerHTML = `
        <h1 style="place-items: center;"> Corresponde un 70% de descuento. El precio con descuento es ${descuentoEnlatados}  </h1>
        ` ;
    } else if (tipoProducto == "carne" && esPolloOPescado == "si") {
        document.querySelector(`#mensaje_descuento`).innerHTML = `
        <h1 style="place-items: center;"> Corresponde un 30% de descuento. El precio con descuento es ${descuentoPolloOPescado}  </h1>
        ` ;
    }
}