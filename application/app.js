/// Find
const players = [
  {
    nome: 'Vessana',
    classe: 'Sacerdote',
    specialization: 'Sagrado',
    race: 'Elfo Noturno'
  },
  {
    nome: 'Paulosan',
    classe: 'Mago',
    specialization: 'Arcano',
    race: 'Humano'
  },
  {
    nome: 'Paulokun',
    classe: 'Mago',
    specialization: 'Frost',
    race: 'Elfo sangrento'
  },
  {
    nome: 'Dudajin',
    classe: 'Sacerdote',
    specialization: 'Sombra',
    race: 'Troll'
  }
]

const findMage = players.find(player => player.classe === 'Mago')
const allMages = players.filter(player => player.classe === 'Mago')
const findFrostMage = players.find(player => player.classe.includes('Mago') && player.specialization.includes('Frost'))
const findShadowPriest = players.find(player => {
  const { specialization, classe } = player
  return classe.includes('Sacerdote') && specialization.includes('Sombra')
})
console.log('First Mage is here: ', findMage)
console.log('Mages are here: ', allMages)
console.log('Frost Mage is here: ', findFrostMage)
console.log('Da Shadow Troll is here: ', findShadowPriest)
