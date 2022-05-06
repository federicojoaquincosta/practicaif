var ingresarNumero1 = prompt("Primer Numero", "Número 1");
var ingresarNumero2 = prompt("Segundo Numero", "Número 2");
var ingresarNumero3 = prompt("Tercer Numero", "Número 3");

var Bingo = `<img src="https://media.istockphoto.com/vectors/bingo-neon-sign-with-lottery-balls-and-stars-vector-id1205079090?s=612x612" alt="" srcset=""></img>`
var segundoPuesto = `<img src="https://i.pinimg.com/550x/19/33/45/19334504057c69a6ca9348a7c2026bcd.jpg" alt="" srcset="">`;
var heladoGratis = `<img src="https://miro.medium.com/max/1400/1*bfZDbOklw1vddf93pGDniA.jpeg" alt="" srcset="">`


var numero1 = 3;
var numero2 = 5;
var numero3 = 7;

if (ingresarNumero1 == numero1 && ingresarNumero2 == numero2 && ingresarNumero3 == numero3) {
    document.write(`${Bingo}`);
} else if ( ingresarNumero1 == numero1 && ingresarNumero2 == numero2 || ingresarNumero1 == numero1 && ingresarNumero3 == numero3 || ingresarNumero2 == numero2 && ingresarNumero3 == numero3 ){
    document.write(`${segundoPuesto}`);
} else {
    document.write(`Helado Gratis!
    <br>
    ${heladoGratis}`);
}