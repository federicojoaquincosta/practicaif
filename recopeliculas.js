

let generoIngresado = "generoxdefecto";
let edadEspectador = 0;

function recomendar() {
 generoIngresado = document.querySelector(`#genero_pelicula`).value;
 edadEspectador = document.querySelector(`#edad_espectador`).value;

 if (generoIngresado == "terror" && edadEspectador >= 18) {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Malignant, Midsommar, Hereditary </h1>
    ` ;
 } else if (generoIngresado == "terror" && edadEspectador < 18) {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Hay que tener más de 18 años para ver películas de terror! (ahre)</h1>
    ` ;
 } else if (generoIngresado == "romance" && edadEspectador >= 18) {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Orgullo y Prejuicio, The Notebook, Before Sunrise </h1>
    ` ;
 } else if (generoIngresado == "romance" && edadEspectador < 18) {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Hay que tener más de 18 años para ver películas de romance! (ahre)</h1>
    ` ;
 } else if (generoIngresado == "sci-fi") {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Dune, Star Wars, Star Trek </h1>
    ` ;
 } else if (generoIngresado == "fantasia") {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Eragon, El Señor de los anillos, Big Fish </h1>
    ` ;
 } else if (generoIngresado == "comedia") {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> 21 jump street, Pineapple express, Shaun of the dead </h1>
    ` ;
 } else if (generoIngresado == "drama" && edadEspectador >= 18) {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Jackie Brown, 12 años de esclavitud, El secreto de sus ojos  </h1>
    ` ;
 } else if (generoIngresado == "drama" && edadEspectador < 18) {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> Hay que tener más de 18 años para ver películas de drama! (ahre)</h1>
    ` ;
 } else {
    document.querySelector(`#mensaje_recomendadas`).innerHTML = `
    <h1 style="place-items: center;"> disculpe, no contamos con recomendaciones para ese género</h1>
    ` ;
 }

}







if (ingresarGenero == "terror") {
    document.write(`Películas recomendadas: `)
} else if (ingresarGenero == "romance") {
    document.write(`Películas recomendadas: `)
} else if (ingresarGenero == "scifi") {
    document.write(`Películas recomendadas: `)
} else if (ingresarGenero == "fantasia") {
    document.write(`Películas recomendadas: `)
} else if (ingresarGenero == "drama") {
    document.write(`Películas recomendadas:`)
} else if (ingresarGenero == "comedia") {
    document.write(`Películas recomendadas:`)
} else {
    document.write(`disculpe, no contamos con recomendaciones para ese género`)
}