///Constante

const nomeConst = true

///Let

let nomeLet = 'novoNome'

///var

var nomeVar = 'novoNome'

if( nomeConst ){
  const nomeConst2 = 'const'
  let nomeLet2 = 'let'
  var nomeVar2 = 'var'
  console.log(`${nomeConst2} ${nomeLet2} ${nomeVar2}`)
}
console.log(nomeConst)

console.log(nomeLet)

console.log(nomeVar)


// console.log(nomeVar2)

// console.log(nomeLet2)

// console.log(nomeConst2)


// parametros opicionais

function soma(a, b){
  console.log(a + b)
}

function subtração(a, b){
  console.log(a - b)
}

// function soma(a, b = 0){
//   console.log(a + b)
// }

// function subtração(a, b = 0){
//   console.log(a - b)
// }

// function subtração(a,b, inverter = false){
//   if(inverter){
//     console.log(b - a)
//   } else {
//     console.log(a - b)
//   }
// }
  