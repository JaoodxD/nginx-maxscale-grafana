const Fastify = require('fastify')

const host = process.env.host || '0.0.0.0'
const port = process.env.port || 3000

const app = Fastify()

app.get('/', (req, res) => {
  console.log(`handling request on port ${port}`)
  res.send({ hello: 'world' })
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
