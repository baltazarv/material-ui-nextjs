const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL

app.prepare().then(() => {
	const server = express()

	/* give all Next.js's requests to Next.js server */
	// server.get('/_next/*', (req, res) => {
	// 	handle(req, res)
	// })

	/* default route (server.all vs. server.get)
	 - allows Next to handle all other routes
	 - includes the numerous `/_next/...` routes which must be exposed for the next app to work correctly
	 - includes 404'ing on unknown routes */
	server.all('*', (req, res) => {
		handle(req, res)
	})

	server.listen(port, err => {
		if (err) throw err
		console.log(`Ready on ${ROOT_URL}`)
	})
})
