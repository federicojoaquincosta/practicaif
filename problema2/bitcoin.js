const VALOR_BTC_A_DOLAR = 39685.40;
const VALOR_BTC_A_ETHEREUM = 13.5400;


//bitcoinADolar = ingresarBtc * 39685.40;
//bitcoinAEthereum = ingresarBtc * 13.5400;

let btcIngresado = 0;


function convertirADolar() {
    btcIngresado = document.querySelector(`#btc_ingresado`).value;
    let btcADolar = btcIngresado * VALOR_BTC_A_DOLAR;

    document.querySelector(`#mensaje_conversion`).innerHTML = `
    <h1 style="place-items: center;"> ${btcIngresado} Bitcoin equivalen a ${btcADolar} dólares </h1>
    
    ` ;
}


function convertirAEthereum() {
    btcIngresado = document.querySelector(`#btc_ingresado`).value;
    let btcAEthereum = btcIngresado * VALOR_BTC_A_ETHEREUM;

    document.querySelector(`#mensaje_conversion`).innerHTML = `
    <h1 style="place-items: center;"> ${btcIngresado} Bitcoin equivalen a ${btcAEthereum} Ethereum </h1>
    
    ` ;
}









