/* let valorBoleto = 100;

console.log(valorBoleto) //certo
console.log(valorBolet) //errado */


let inputTelefone = document.getElementById('telefone');

console.log(inputTelefone)

inputTelefone.disabled = true;

function habilitarTelefone() {
    let inputTelefone = document.getElementById('telefone');

    inputTelefone.disabled = false;

}