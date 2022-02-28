import express from 'express'
import pipedrive from './routes.js'


const app = express()


app.use(pipedrive)

app.listen(3000, () => console.log('Rodando na porta 3000'))