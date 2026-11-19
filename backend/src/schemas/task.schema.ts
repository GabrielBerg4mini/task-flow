import { z } from 'zod'
import { categories, type CategoryValue } from '../config/categories.js'

// z.enum exige uma tupla não vazia; o "as" diz isso ao TypeScript
const categoryValues = categories.map((c) => c.value) as [CategoryValue, ...CategoryValue[]]

const title = z.string().trim().min(1, 'Título é obrigatório').max(120)
const description = z.string().trim().max(500)
const category = z.enum(categoryValues, { error: 'Categoria inválida' })
const priority = z.enum(['high', 'normal', 'low'], { error: 'Prioridade inválida' })
const dueDate = z
  .string()
  .refine((value) => !Number.isNaN(Date.parse(value)), 'Data de entrega inválida')

export const createTaskSchema = z.object({
  title,
  description,
  category,
  priority,
  dueDate,
  // na criação só é permitido todo ou in_progress (nunca completed)
  status: z.enum(['todo', 'in_progress'], { error: 'Status inicial inválido' }).optional(),
})

export const updateTaskSchema = z
  .object({
    title,
    description,
    category,
    priority,
    dueDate,
    status: z.enum(['todo', 'in_progress', 'completed'], { error: 'Status inválido' }),
  })
  .partial()
  .refine((body) => Object.keys(body).length > 0, 'Envie ao menos um campo para atualizar')

export const listTasksQuerySchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
})
