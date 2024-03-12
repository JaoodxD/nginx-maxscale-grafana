const Fastify = require('fastify')

const host = process.env.host || '0.0.0.0'
const port = process.env.port || 3001

const app = Fastify()

app.get('/', async (req, res) => {
  let data = null
  try {
    const response = await fetch('http://fastify-server-1:3000')
    data = await response.text()
  } catch (error) {
    console.error(error)
  }
  console.log(`handling request on port ${port}`)
  res.send({ hello: 'world', data })
})

start()

async function start () {
  try {
    await app.listen({ host, port })
    console.log(`Server listen on port ${port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
