///Constante

// const nomeConst = true

///Let

// let nomeLet = 'novoNome'

///var

// var nomeVar = 'novoNome'

// if( nomeConst ){
//   const nomeConst2 = 'const'
//   let nomeLet2 = 'let'
//   var nomeVar2 = 'var'
//   console.log(`${nomeConst2} ${nomeLet2} ${nomeVar2}`)
// }
// console.log(nomeConst)

// console.log(nomeLet)

// console.log(nomeVar)


// console.log(nomeVar2)

// console.log(nomeLet2)

// console.log(nomeConst2)


// parametros opicionais

// function soma(a, b){
//   console.log(a + b)
// }

// function subtração(a, b){
//   console.log(a - b)
// }

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

// const slime = {
//   name: 'Slime',
//   level: 12,
//   atack: 5,
//   defense: 5,
//   resistence: 5
// }
// console.log('slime normal: ',slime)
// const slimeVermelho = {
//   level:15,
//   atack: 8,
//   defense: 8,
//   resistence: 8
// }
// console.log('Slime vermelho: ',slimeVermelho)
// const formaAntigaCopy = {
//   name: slime.name,
//   level: slimeVermelho.level,
//   defense: slimeVermelho.defense,
//   resistence: slimeVermelho.resistence
// }
// console.log('copy slime: ',formaAntigaCopy)
// const spreadCopy = {
//   ...slime, ...slimeVermelho
// }
// console.log('Spread slime: ',spreadCopy)


// ///Desestruturação

// const newPlayer2= {
//   nome: 'Vessana',
//   classe: 'Sacerdote',
//   specialization: 'Sagrado',
//   race: 'Elfo Noturno'
// }

// const {nome, classe , race, specialization} = newPlayer2

// console.log(`Player name: ${nome} race ${race}, class ${classe} with specialization ${specialization}.`)


/// Arrow Function

// function soma (a, b){
//   console.log(a + b)
// }

// console.log('resultado soma função declarada fora de variável: ',soma(1,2))
// const somaConst = function (a, b){
//   console.log(a + b)
// }
// console.log('resultado soma função dentro da variável: ', somaConst(1,2))
// // (a, b) => {
// //   console.log(a + b)
// // } *** caso de callback
// const somaArrow = (a, b) => {
//   console.log(a + b)
// }
// console.log('resultado soma arrow function salva dentro de variável: ',somaArrow(1,2))
// const printNum = a =>{
//   console.log(a)
// }
// console.log('console.log de arrow function com um unico parametro: ', printNum(20))

// const printNumResumida = a => console.log(a)
// console.log('console.log de arrow function que apenas tem uma linha: ', printNumResumida(20))

// const soma2 = (a, b) => a + b
// const resultado = soma2(2, 3)
// console.log('Return omitido em arrow functions quando função apenas tem uma linha: ', resultado)

/// Find
// const players = [
//   {
//     nome: 'Vessana',
//     classe: 'Sacerdote',
//     specialization: 'Sagrado',
//     race: 'Elfo Noturno'
//   },
//   {
//     nome: 'Paulosan',
//     classe: 'Mago',
//     specialization: 'Arcano',
//     race: 'Humano'
//   },
//   {
//     nome: 'Paulokun',
//     classe: 'Mago',
//     specialization: 'Frost',
//     race: 'Elfo sangrento'
//   },
//   {
//     nome: 'Dudajin',
//     classe: 'Sacerdote',
//     specialization: 'Sombra',
//     race: 'Troll'
//   }
// ]

// const findMage = players.find(player => player.classe === 'Mago')
// const allMages = players.filter(player => player.classe === 'Mago')
// const findFrostMage = players.find(player => player.classe.includes('Mago') && player.specialization.includes('Frost'))
// const findShadowPriest = players.find(player => {
//   const { specialization, classe } = player
//   return classe.includes('Sacerdote') && specialization.includes('Sombra')
// })
// console.log('First Mage is here: ', findMage)
// console.log('Mages are here: ', allMages)
// console.log('Frost Mage is here: ', findFrostMage)
// console.log('Da Shadow Troll is here: ', findShadowPriest)


//Template Literals

const hello ='Olá'

const world = 'Mundo'

console.log(hello+' '+world+'!')  

console.log(`${hello} ${world}!`)