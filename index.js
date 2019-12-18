const http = require('http')



function expressless() {
    const gets = {}
    const posts = {}
    // TODO other methods

    const server = http.createServer((req, res) => {
        switch (req.method) {
            case 'GET':
                const handle = gets[req.path]

                if (handle) handle(req, res)

                break
            case 'POST':
                const handle = posts[req.path]

                if (handle) handle(req, res)
                
                break
            // TODO other methods
        }

    })

    server.get = function(path, handler) {
        gets[path] = handler
    }

    server.post = function(path, handler) {
        posts[path] = handler
    }

    // TODO other methods

    return server
}

// demo

const app = expressless()

app.get('hello-world', (req, res) => res.end('Hello, World!'))
