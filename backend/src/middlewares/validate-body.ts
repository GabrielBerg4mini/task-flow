import type { RequestHandler } from 'express'
import type { ZodType } from 'zod'

// Fábrica de middleware: recebe um schema e devolve o middleware que o aplica.
// Se o body for inválido, o parse lança um ZodError, que cai no middleware de erro.
// Se for válido, o body é substituído pela versão "limpa" (campos desconhecidos removidos).
export function validateBody(schema: ZodType): RequestHandler {
  return (req, _res, next) => {
    req.body = schema.parse(req.body)
    next()
  }
}
