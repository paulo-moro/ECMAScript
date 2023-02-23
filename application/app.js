
//Desestruturação

const newPlayer2= {
  nome: 'Vessana',
  classe: 'Sacerdote',
  specialization: 'Sagrado',
  race: 'Elfo Noturno'
}

const {nome, classe , race, specialization} = newPlayer2

console.log(`Player name: ${nome} race ${race}, class ${classe} with specialization ${specialization}.`)

