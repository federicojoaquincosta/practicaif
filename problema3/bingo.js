let primerNumero = 0;
let segundoNumero = 0; 
let tercerNumero = 0;

var bingo = `<img src="https://media.istockphoto.com/vectors/bingo-neon-sign-with-lottery-balls-and-stars-vector-id1205079090?s=612x612" alt="" srcset=""></img>`
var segundoPuesto = `<img src="https://i.pinimg.com/550x/19/33/45/19334504057c69a6ca9348a7c2026bcd.jpg" alt="" srcset="">`;
var heladoGratis = `<img src="https://miro.medium.com/max/1400/1*bfZDbOklw1vddf93pGDniA.jpeg" alt="" srcset="">`

function verificarBingo(){
    primerNumero = document.querySelector(`#primer_numero`).value;
    segundoNumero = document.querySelector(`#segundo_numero`).value;
    tercerNumero = document.querySelector(`#tercer_numero`).value;

    if (primerNumero == segundoNumero && primerNumero == tercerNumero) {
        document.querySelector(`#mensaje_bingo`).innerHTML = `
        <h1 style="place-items: center;"> ${bingo}</h1>
        
        ` ;
    } else if (primerNumero == segundoNumero || primerNumero == tercerNumero || segundoNumero == tercerNumero) {
        document.querySelector(`#mensaje_bingo`).innerHTML = `
        <h1 style="place-items: center;"> ${segundoPuesto}</h1>
        
        ` ;
    } else {
        document.querySelector(`#mensaje_bingo`).innerHTML = `
        <h1 style="place-items: center;"> ${heladoGratis}</h1>
        
        ` ;
    }

}


















