# Simple remake of Express JS using module `http`

## Demo

```js
const express = require('not-express')

const app = express()

app.get('hello-world', (req, res) => res.end('Hello, World!'))

app.listen(8080)
```
