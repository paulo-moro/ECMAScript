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

## Desestuturação

Permite recuperar campos de um JSON e criar variáveis a partir disso. Funcionando como um extrator de variáveis de um JSON.

```
const newPlayer2= {
  nome: 'Vessana',
  classe: 'Sacerdote',
  specialization: 'Sagrado',
  race: 'Elfo Noturno'
}

const {nome, classe , race, specialization} = newPlayer2

console.log(`Player name: ${nome} race ${race}, class ${classe} with specialization ${specialization}.`)
```

## Arrow Function

São uma forma facil de declarar uma nova função, as arrow functions são outra forma de declarar uma função sem ser da forma convencional que é a partir da palavra reservada function.

```
function soma (a, b){
  console.log(a + b)
}

console.log('resultado soma função declarada fora de variável: ',soma(1,2))

const somaConst = function (a, b){
  console.log(a + b)
}
console.log('resultado soma função dentro da variável: ', somaConst(1,2))
(a, b) => {
  console.log(a + b)
} **** esse caso é somente utilizável em caso de callbacks
const somaArrow = () => {
  console.log(a + b)
}
console.log('resultado soma arrow function salva dentro de variável: ',somaArrow(1,2))

const printNum = a =>{
  console.log(a)
} /// quando há somente um parâmetro não é necessário declarar os parâmetros entre parenteses.
console.log('console.log de arrow function com um unico parametro: ', printNum(20))

const printNumResumida = a => console.log(a) /// se a função apenas tem uma linha pode ser resumida dessa forma
```

### Retornos

Em funções quando quero que um valor seja retornado eu declaro o retorno após a palavra reservada return. Em arrow function além do return é possivel omitir o return se a função apenas tiver uma linha

```
const soma2 = (a, b) => a + b
const resultado = soma2(2, 3)
console.log(resultado)
```

### Callbacks

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação. (MDN)

```
function greeting(name) {
  alert('Olá ' + name);
}

function processUserInput(callback) {
  var name = prompt('Por favor insira seu nome.');
  callback(name);
}

processUserInput(greeting);
```

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

## Template Literals

Template literals é uma forma mais simplificada de concatenar variáveis com strings, de uma forma mais prática é possivel criar strings personalizadas a partir de variáveis. Exemplo:

```
const hello ='Olá'

const world = 'Mundo'

console.log(hello+' '+world+'!')  // sem Template Literals

console.log(`${hello} ${world}!`)// com Template Literals

```

Ao declarar o template literals vc 'envolve' a string que será criada com a crase " ` " ( o acento agudo ao contrario), dentro dela vc pode declarar as variáveis dentro dos ${} e fora com a string que vc for adicionar.
