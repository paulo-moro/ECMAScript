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