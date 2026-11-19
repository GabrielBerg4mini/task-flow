import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import routes from './routes/index.js'
import { notFound } from './middlewares/not-found.js'
import { errorHandler } from './middlewares/error-handler.js'

const app = express()

// A ordem importa: middlewares globais -> rotas -> 404 -> erro (sempre por último)
app.use(cors({ origin: env.corsOrigin }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/v1', routes)

app.use(notFound)
app.use(errorHandler)

export default app
