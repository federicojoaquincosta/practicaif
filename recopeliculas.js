var ingresarGenero = prompt("Ingresar género de película favorito", "Género de película")
var ingresarEdad = prompt("Ingrese su edad", "Edad");

//var terror = "terror";
//var romance = "romance";
//var scifi = "scifi";
//var fantasia = "fantasia";
//var drama = "drama";
//var comedia = "comedia";

if (ingresarGenero == "terror") {
    document.write(`Películas recomendadas: Malignant, Midsommar, Hereditary`)
} else if (ingresarGenero == "romance") {
    document.write(`Películas recomendadas: Orgullo y Prejuicio, The Notebook, Bajo la misma estrella`)
} else if (ingresarGenero == "scifi") {
    document.write(`Películas recomendadas: Dune, Star Wars, Star Trek`)
} else if (ingresarGenero == "fantasia") {
    document.write(`Películas recomendadas: Eragon, El Señor de los anillos, Big Fish`)
} else if (ingresarGenero == "drama") {
    document.write(`Películas recomendadas:Jackie Brown, 12 años de esclavitud, El secreto de sus ojos `)
} else if (ingresarGenero == "comedia") {
    document.write(`Películas recomendadas: 21 jump street, Pineapple express, Shaun of the dead`)
} else {
    document.write(`disculpe, no contamos con recomendaciones para ese género`)
}