import type { RequestHandler } from 'express'
import { NotFoundError } from '../errors/http-error.js'

// Roda só quando nenhuma rota anterior respondeu.
export const notFound: RequestHandler = (_req, _res, next) => {
  next(new NotFoundError('Rota não encontrada.'))
}
