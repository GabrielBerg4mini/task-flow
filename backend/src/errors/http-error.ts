export class HttpError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
  ) {
    super(message)
  }
}

export class NotFoundError extends HttpError {
  constructor(message = 'Recurso não encontrado.') {
    super(message, 404)
  }
}

export class BadRequestError extends HttpError {
  constructor(message = 'Requisição inválida.') {
    super(message, 400)
  }
}
