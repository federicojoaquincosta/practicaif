let tipoMascota = "mascota";
let cantidadMascota = 0;
let minutosPaseo = 0;


function solicitarPaseo() {
    tipoMascota = document.querySelector(`#tipo_mascota`).value;
    cantidadMascota = document.querySelector(`#cantidad_mascota`).value;
    minutosPaseo = document.querySelector(`#minutos_paseo`).value;

    if ((tipoMascota == "perro" || tipoMascota == "gato") && cantidadMascota <= 3 && (minutosPaseo >= 30 && minutosPaseo <= 60)) {

        document.querySelector(`#mensaje_paseo`).innerHTML = `
        <h1 style="place-items: center;"> Su paseo puede ser realizado! Contactarse al 505 888 </h1>
        
        ` ;
    } else {
        document.querySelector(`#mensaje_paseo`).innerHTML = `
        <h1 style="place-items: center;"> Su paseo no puede ser realizado. Mil disculpas </h1>
        
        ` ;
    }
}




















