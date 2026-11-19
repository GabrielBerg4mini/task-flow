import type { RequestHandler } from 'express'
import { categories } from '../config/categories.js'

export const list: RequestHandler = (_req, res) => {
  res.json(categories)
}
