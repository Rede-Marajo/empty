# empty

## Define se o conteúdo passado é vazio.

### Instalação

```sh
npm i @redemarajo/empty
```

## Uso

```js
const empty = require("@redemarajo/empty");

const emptyArray = [];
const emptyString = "";
const emptyObject = {};
const falseNumber = 0;
const falseBoolean = false;

empty(emptyArray); // true
empty(emptyString); // true
empty(emptyObject); // true
empty(falseNumber); // true
empty(falseBoolean); // true
empty(null); // true
empty(undefined); // true
empty(NaN); // true
empty(new Date("invalid date")); // true

empty(/*Unknown type*/, true); // throw TypeError
```
