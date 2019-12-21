const express = require('.')

const app = express()

const demo = (req, res) => res.end(`Hello, ${req.method}!`)

app.get('/hello', demo)

app.post('/hello', demo)

app.put('/hello', demo)

app.patch('/hello', demo)

app.delete('/hello', demo)

app.options('/hello', demo)

app.listen(8080, () => console.log('server up and running'))