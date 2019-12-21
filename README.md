# Simple starter remake of Express JS

## Demo

Server

```js
const express = require('not-express')

const app = express()

const demo = (req, res) => res.end(`Hello, ${req.method}!`)

app.get('/hello', demo)

app.post('/hello', demo)

app.put('/hello', demo)

app.patch('/hello', demo)

app.delete('/hello', demo)

app.options('/hello', demo)

app.listen(8080, () => console.log('server up and running'))
```

CLI tests

```c
$ curl -X PUT localhost:8080/hello
// => Hello, PUT!

$ curl -X PATCH localhost:8080/hello
// => Hello, PATCH!

$ curl -X DELETE localhost:8080/hello
// => Hello, DELETE!

$ curl -X OPTIONS localhost:8080/hello
// => Hello, OPTIONS!

$ curl -X GET localhost:8080/hello
// => Hello, GET!

$ curl -X POST localhost:8080/hello
// => Hello, POST!

$ curl -X POST localhost:8080/wrong
// => Cannot POST on /wrong
```
