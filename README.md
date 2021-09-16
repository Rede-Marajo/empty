# empty

## _Define se uma variável é undefined, null, string vazia ou array vazio._

## Instalação

```sh
npm i @redemarajo/empty
```

Ou

```sh
yarn add @redemarajo/empty
```

## Uso

```js
const empty = require('@redemarajo/empty');
let vazioArray = [];
let vazioString = '';

if (vazioArray || vazioString) {
  console.log('is empty');
}
```
