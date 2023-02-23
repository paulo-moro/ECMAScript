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

## Constantes

### Variável

Váriavel de forma resumida, é uma forma de armazenar em memória um determinado valor, esse valor pode variar futuramente, por esse motivo recebe o nome variável.

### Variável vs Constantes

Possuem a mesma funcionalidade e funções que uma variável, diferente de uma variável, uma constante somente pode ter seu valor definido uma única vez.

```
const newConst = 'constValue'

newConst = 'newConstValue' /// erro ao tentar reatribuir
```

## Let e Escopo

### Let

Let é assim como const, outra forma de definir uma variável, diferente da constante, o let permite que tenha seu valor reatribuido.

### var x const x let

Tanto var e a let permitem que seus valores sejam reatribuidos, o que muda de uma variável para outra é que tanto a let quanto a const diferente da var, possuem um escopo, global, local e de bloco, enquanto a var possui um escopo global ou local.

### Escopo

Escopo é o nível de acesso de uma variável, var, let e const possuem escopo, global, local. let e const possuem um terceiro escopo, o bloco, que é iniciado e terminado com o simbolo "{}".
Ou seja, if, else, for.

```
///Constante

const nomeConst = true

///Let

let nomeLet = 'novoNome'
nomeLet = 'novoNome2'

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

console.log(nomeVar2)

console.log(nomeLet2) // não acessado fora de escopo

console.log(nomeConst2) // não acessado fora de escopo

```

## Parâmetros opcionais

Ao declarar uma função é possível declarar parâmetros para ela, para definir um parâmetro como opcional basta, adicionar um valor padrão para esse parâmetro quando eles são definidos na função.

```
function soma(a, b){
  console.log(a + b)
}
function sub(a, b = 0){
  console.log(a - b)
}
```

### Regras de parâmetros opcionais

Parâmetros opcionais devem ser os ultimos parâmetros definidos em sua função.

## JSON encurtados

É possível definir chaves de JSON sem necessidade de definir os nomes de chaves. Originalmente para definir um valor de uma chave no JSON era necessário declarar o nome da chave e o valor em seguida. Com o JS atual, é possivel declarar somente os valores das variaveis no JSON, que os nomes das chaves se tornam os nomes das variáveis enquanto os valores são os valores das variáveis.

```
const nome = 'Paulosan'

const classe = 'Mago'

const specialization = 'Arcano'

const race = 'Humano'

const player = {
 nome: nome,
 classe: classe,
 specialization: specialization,
 race: race
}
console.log('Jogador criado da forma convencional: ', player)
const newPlayer = {
 nome,
 classe,
 specialization,
 race
}

console.log('Jogador criado com JSON encurtado: ', newPlayer)
```

## Spread

O operador spread é utilizado para copiar os campos de um objeto e em seguida colar em um novo objeto.

```
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
```
