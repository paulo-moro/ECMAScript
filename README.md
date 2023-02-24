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
