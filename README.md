# ECMA Script

ECMA resumidamente são especificações criadas para o javascript, até a versão oito a nomenclatura utilizada é "ES1", "ES2", "ES3" ...
Atualmente a nomenclatura é definida como "ES2019", "ES2020"...
Com essas especificações é possível utilizar novos recursos do javascript, durante o curso disponível é reportado sobre os ECMA's ES6, ES7 e ES8 ao qual a maioria dos navegadores atuais já conseguem interpretar do javascript.

Nessas aulas falaremos dos seguintes tópicos:

- Constantes
- Let e escopo
- Parâmetros opcionais
- JSON encurtados
- Operador spread
- Desestruturação
- Arrow function
- Find
- Templates Literais
- Clean Code Javascipt

## Find

No ECMA 6 foi incluido o método Find , útil para encontrar um registro dentro de um array.

```
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
console.log('First Mage is here: ', findMage) // find retorna o primeiro item encontrado que segue a condição na função callback
console.log('Mages are here: ', allMages) // filter retorna um array
console.log('Frost Mage is here: ', findFrostMage) // operadores logicos podem ser utilizados no retorno do find para aumentar a complexidade da procura
console.log('Da Shadow Troll is here: ', findShadowPriest)// outros metodos de string e array podem ser combinados com operadores logicos para encontrar algum item especifico, além disso nesse exemplo adicionamos alguns assuntos tratados anteriormente.
```
