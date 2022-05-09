let anioProcedencia = 0; 
let anioPresente = 0; 
let energiaActual = 0; 

function viajarEnElTiempo() {
    anioProcedencia = document.querySelector(`#anio_procedencia`).value;
    anioPresente = document.querySelector(`#anio_presente`).value;
    energiaActual = document.querySelector(`#energia_actual`).value;
    let anioFuturo = (anioPresente - anioProcedencia);  
    let anioPasado = (anioProcedencia - anioPresente);

    if (anioProcedencia == anioPresente) {
        document.querySelector(`#mensaje_viajero`).innerHTML = `
        <h1 style="place-items: center;"> Se encuentra en su año de procedencia </h1>
        
        ` ;
    } else if (anioProcedencia < anioPresente)  {
        document.querySelector(`#mensaje_viajero`).innerHTML = `
        <h1 style="place-items: center;"> Se encuentra en el futuro. Viajó ${anioFuturo} años al futuro </h1>
        
        ` ;
    } else if (anioProcedencia > anioPresente) {
        document.querySelector(`#mensaje_viajero`).innerHTML = `
        <h1 style="place-items: center;"> Se encuentra en el pasado. Viajó ${anioPasado} años al pasado </h1>
        
        ` ;
    }


    if (energiaActual >= 2.42 ) {
        document.querySelector(`#mensaje_bateria`).innerHTML = `
        <h1 style="place-items: center;"> Tiene batería suficiente para realizar un viaje en el tiempo </h1>
        
        ` ;
    } else if (energiaActual < 2.42) {
        document.querySelector(`#mensaje_bateria`).innerHTML = `
        <h1 style="place-items: center;"> No cuenta con batería suficiente para viajar en el tiempo </h1>
        
        ` ;
    }
}