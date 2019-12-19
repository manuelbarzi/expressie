const http = require('http')
const url = require('url')
const { Server } = http

Server.prototype.add = function(method, path, handler) {
	((this.handlers || (this.handlers = {}) ) && (this.handlers[method] || (this.handlers[method] = {})))[path] = handler
}

Server.prototype.get = function(path, handler) {
	this.add('GET', path, handler)
}

Server.prototype.post = function(path, handler) {
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

	return server
}
