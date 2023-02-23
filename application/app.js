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


// const nome = 'Paulosan'

// const classe = 'Mago'

// const specialization = 'Arcano'

// const race = 'Humano'

// const player = {
//   nome: nome,
//   classe: classe,
//   specialization: specialization,
//   race: race
// }
// console.log('Jogador criado da forma convencional: ', player)

// const newPlayer = {
//   nome,
//   classe,
//   specialization,
//   race
// }

// console.log('Jogador criado com JSON encurtado: ', newPlayer)


///Spread

const slime = {
  name: 'Slime',
  level: 12,
  atack: 5,
  defense: 5,
  resistence: 5
}
console.log('slime normal: ',slime)
const slimeVermelho = {
  level:15,
  atack: 8,
  defense: 8,
  resistence: 8
}
console.log('Slime vermelho: ',slimeVermelho)
const formaAntigaCopy = {
  name: slime.name,
  level: slimeVermelho.level,
  defense: slimeVermelho.defense,
  resistence: slimeVermelho.resistence
}
console.log('copy slime: ',formaAntigaCopy)
const spreadCopy = {
  ...slime, ...slimeVermelho
}
console.log('Spread slime: ',spreadCopy)


///Desestruturação

const newPlayer2= {
  nome: 'Vessana',
  classe: 'Sacerdote',
  specialization: 'Sagrado',
  race: 'Elfo Noturno'
}

const {nome, classe , race, specialization} = newPlayer2

console.log(`Player name: ${nome} race ${race}, class ${classe} with specialization ${specialization}.`)