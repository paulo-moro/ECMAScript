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
