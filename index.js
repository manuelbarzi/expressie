const http = require('http')
const url = require('url')

module.exports = function() {
	const handlers = {}

	const server = http.createServer((req, res) => {
		const { method } = req
		const { pathname: path, query } = url.parse(req.url, true)

		query && (req.query = query)

		let _handler

		((_handler = handlers[method]) && (_handler = _handler[path])) && _handler(req, res) || res.end(`Cannot ${method} on ${path}`)
	})

	server.add = function(method, path, handler) {
		(handlers[method] || (handlers[method] = {}))[path] = handler
	}

	server.get = function(path, handler) {
		this.add('GET', path, handler)
	}

	server.post = function(path, handler) {
		this.add('POST', path, handler)
	}

	return server
}
