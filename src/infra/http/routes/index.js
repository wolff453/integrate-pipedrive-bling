import express from 'express'
import config from '../../../../config/index.js'
import pipedrive from './routes.js'


const app = express()


app.use(pipedrive)

app.listen(config.infra.port, () => console.log(`Rodando na porta ${config.infra.port}`))
