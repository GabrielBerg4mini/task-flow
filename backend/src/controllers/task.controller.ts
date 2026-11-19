import type { RequestHandler } from 'express'
import type { CreateTaskDto, UpdateTask } from '../types/task.js'
import { listTasksQuerySchema } from '../schemas/task.schema.js'
import * as taskService from '../services/task.service.js'

// O controller só traduz HTTP <-> service: lê o req, chama o service, responde.
// Erros lançados pelo service sobem sozinhos até o middleware de erro (Express 5).

export const list: RequestHandler = (req, res) => {
  const query = listTasksQuerySchema.parse(req.query)
  res.json(taskService.getAllTasks(query))
}

export const getById: RequestHandler<{ id: string }> = (req, res) => {
  res.json(taskService.getTask(req.params.id))
}

export const create: RequestHandler = (req, res) => {
  // o body já foi validado e limpo pelo middleware validateBody
  const task = taskService.createTask(req.body as CreateTaskDto)
  res.status(201).json(task)
}

export const update: RequestHandler<{ id: string }> = (req, res) => {
  const task = taskService.updateTask(req.params.id, req.body as UpdateTask)
  res.json(task)
}

export const remove: RequestHandler<{ id: string }> = (req, res) => {
  taskService.removeTask(req.params.id)
  res.status(204).send()
}
