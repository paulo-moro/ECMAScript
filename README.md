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

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.(MDN)

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
