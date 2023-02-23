/// Arrow Function

function soma (a, b){
  console.log(a + b)
}

console.log('resultado soma função declarada fora de variável: ',soma(1,2))
const somaConst = function (a, b){
  console.log(a + b)
}
console.log('resultado soma função dentro da variável: ', somaConst(1,2))
// (a, b) => {
//   console.log(a + b)
// } *** caso de callback
const somaArrow = (a, b) => {
  console.log(a + b)
}
console.log('resultado soma arrow function salva dentro de variável: ',somaArrow(1,2))
const printNum = a =>{
  console.log(a)
}
console.log('console.log de arrow function com um unico parametro: ', printNum(20))

const printNumResumida = a => console.log(a)
console.log('console.log de arrow function que apenas tem uma linha: ', printNumResumida(20))

const soma2 = (a, b) => a + b
const resultado = soma2(2, 3)
console.log('Return omitido em arrow functions quando função apenas tem uma linha: ', resultado)