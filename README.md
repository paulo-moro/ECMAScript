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

## Template Literals

Template literals é uma forma mais simplificada de concatenar variáveis com strings, de uma forma mais prática é possivel criar strings personalizadas a partir de variáveis. Exemplo:

```
const hello ='Olá'

const world = 'Mundo'

console.log(hello+' '+world+'!')  // sem Template Literals

console.log(`${hello} ${world}!`)// com Template Literals

```

Ao declarar o template literals vc 'envolve' a string que será criada com a crase " ` " ( o acento agudo ao contrario), dentro dela vc pode declarar as variáveis dentro dos ${} e fora com a string que vc for adicionar.
