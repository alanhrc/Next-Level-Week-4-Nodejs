import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({message: 'Olá'})
})

app.post('/', (request, response) => {
  const { teste } = request.body

  if(teste) {
    return response.json({message: teste})
  }

  return response.json({message: "Não chegou nada"})

})

app.listen(3333, () => {
  console.log('Server started on port 3333')
})