import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <div>
      <h1>Echoverse</h1>
    </div>  
  `)
})

app.listen(port, () => {
  console.log(`
    Server is running on http://localhost:${port} `)
})