const http = require('http')
const url = require('url')

function add(method, path, handler) {
	((this.handlers || (this.handlers = {}) ) && (this.handlers[method] || (this.handlers[method] = {})))[path] = handler
}

function get(path, handler) {
	this.add('GET', path, handler)
}

function post(path, handler) {
	this.add('POST', path, handler)
}

module.exports = function() {
	const server = http.createServer((req, res) => {
		const { method } = req
		const { pathname: path, query } = url.parse(req.url, true)

		query && (req.query = query)

		let _handler

		(server.handlers && (_handler = server.handlers[method]) && (_handler = _handler[path])) && (_handler(req, res) || true) || res.end(`Cannot ${method} on ${path}`)
	})

	server.add = add
	server.get = get
	server.post = post

	return server
}
