import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'

const app = express()

app.use(cors({ origin: env.corsOrigin }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

export default app
