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