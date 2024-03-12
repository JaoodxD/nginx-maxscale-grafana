const Fastify = require('fastify')
const mysql = require('mysql2/promise')

const host = process.env.host || '0.0.0.0'
const port = process.env.port || 3000
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

const app = Fastify()

start()

async function start() {
  const conn = await mysql.createConnection({
    host: 'mariadb',
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
  })

  await conn.connect()
  const [result] = await conn.query('SELECT 1 + 2 AS TOTAL')
  console.log('test mariadb response:', result)

  app.get('/', async(req, res) => {
    console.log(`handling request on port ${port}`)
    const [result] = await conn.query('SELECT 1 + 2 AS TOTAL')
    return result
    // res.send({ hello: 'world' })
  })
  try {
    await app.listen({ host, port })
    console.log(`Server listen on port ${port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
