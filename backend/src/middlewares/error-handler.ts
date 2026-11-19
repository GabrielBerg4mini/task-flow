import type { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import { HttpError } from '../errors/http-error.js'

// O Express reconhece um middleware de erro pelos 4 parâmetros (err, req, res, next).
// Precisa ser registrado por último no app.
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  // Erro de validação do Zod: 400 com a lista do que está errado
  if (err instanceof ZodError) {
    res.status(400).json({
      message: 'Dados inválidos.',
      errors: err.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    })
    return
  }

  // Erros que nós lançamos (404, 400...): usa o statusCode do próprio erro
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({ message: err.message })
    return
  }

  // JSON malformado no body (erro do express.json)
  if (err?.type === 'entity.parse.failed') {
    res.status(400).json({ message: 'JSON inválido.' })
    return
  }

  // Qualquer outra coisa é bug inesperado: loga e responde 500 sem vazar detalhes
  console.error(err)
  res.status(500).json({ message: 'Erro interno do servidor.' })
}
