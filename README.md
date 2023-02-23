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

