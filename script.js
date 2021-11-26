// Carne - 400gr por pessoa + de 6 hrs - 650
// Cerveja - 1200 ml por pessoa + de 6hrs - 2000ml
// Refrigerante/agua - 1000 ml por pessoa + de 6hrs 1500 ml
// Crianças valem por 0.5 adultos

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let result = document.getElementById("result");

function calc() { 
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);
  let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
  let qdtTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao)/2 * criancas);

  result.innerHTML = `<p>${qdtTotalCarne/1000} Kg de carne</p>`  
  result.innerHTML += `<p>${Math.ceil(qdtTotalCerveja/1000)} Litrões de cerveja</p>`  
  result.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas de 2L de refrigerante</p>`  
}

function carnePorPessoa(duracao) {  
  if(duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPorPessoa(duracao) {  
  if(duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPorPessoa(duracao) {  
  if(duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

