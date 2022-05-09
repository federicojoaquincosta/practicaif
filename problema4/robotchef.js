let hayVerduras = "valorxdefecto";
let hayPolloOCarne = "valorxdefecto"; 
let hayAguaYCondimentos = "valorxdefecto";
let hayAguaYCubito = "valorxdefecto";

function prepararSopita() {

    hayVerduras = document.querySelector(`#tiene_verdura`).value;
    hayPolloOCarne = document.querySelector(`#tiene_pollo_o_carne`).value;
    hayAguaYCondimentos = document.querySelector(`#tiene_agua_y_condimentos`).value;
    hayAguaYCubito = document.querySelector(`#tiene_agua_y_cubitos`).value;

if (hayVerduras == "si" && hayPolloOCarne == "si" && (hayAguaYCondimentos == "si" || hayAguaYCubito == "si" )) {
    document.querySelector(`#mensaje_sopita`).innerHTML = `
    <h1 style="place-items: center;"> Puede hacer una sopita </h1>
    
    ` ;
} else {
    document.querySelector(`#mensaje_sopita`).innerHTML = `
    <h1 style="place-items: center;"> No puede hacer una sopita :( </h1>
    
    ` ;
}

}