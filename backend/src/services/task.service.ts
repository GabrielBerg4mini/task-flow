import { randomUUID } from 'node:crypto'
import type { Task, CreateTaskDto, UpdateTask, StatusTask } from '../types/task.js'
import { create, findAll, findById, remove, update } from '../models/task.model.js'
import { BadRequestError, NotFoundError } from '../errors/http-error.js'
import { categories, type CategoryValue } from '../config/categories.js'

interface TaskQuery {
  search?: string
  category?: string
}

export function createTask(input: CreateTaskDto): Task {
  const status = input.status ?? 'todo'

  if (status !== 'todo' && status !== 'in_progress')
    throw new BadRequestError('Escolha entre Todo e In progress.')

  const newTask: Task = {
    id: randomUUID(),
    category: input.category,
    dueDate: input.dueDate,
    title: input.title,
    description: input.description,
    status,
    priority: input.priority,
    progress: status === 'todo' ? 0 : 50,
  }

  return create(newTask)
}

export function getTask(id: string): Task {
  const task = findById(id)

  if (!task) throw new NotFoundError('Task não encontrada.')

  return task
}

function isCategory(value: string): value is CategoryValue {
  return categories.some((c) => c.value === value)
}

export function getAllTasks(query: TaskQuery = {}): Task[] {
  const { search, category } = query

  let validCategory: CategoryValue | undefined
  if (category) {
    if (!isCategory(category)) throw new BadRequestError('Categoria inválida.')
    validCategory = category
  }

  return findAll({ search, category: validCategory })
}

const COMPLETED_EDITABLE: string[] = ['title', 'description', 'status']

function assertEditableWhenCompleted(input: UpdateTask): void {
  const blocked = Object.entries(input)
    .filter(([key, value]) => value !== undefined && !COMPLETED_EDITABLE.includes(key))
    .map(([key]) => key)

  if (blocked.length > 0) {
    throw new BadRequestError(`Task concluída não permite alterar: ${blocked.join(', ')}.`)
  }
}

function progressAfter(current: Task, next: StatusTask): number {
  if (next === current.status) return current.progress
  if (next === 'completed') return 100
  if (next === 'todo') return 0
  return current.status === 'completed' ? 50 : Math.max(current.progress, 50)
}

export function updateTask(id: string, input: UpdateTask): Task {
  const current = getTask(id)

  if (current.status === 'completed') assertEditableWhenCompleted(input)

  const changes: Partial<Omit<Task, 'id'>> = { ...input }

  if (input.status !== undefined) {
    changes.progress = progressAfter(current, input.status)
  }

  const updated = update(id, changes)

  if (!updated) throw new NotFoundError('Task não encontrada.')

  return updated
}

export function removeTask(id: string): void {
  getTask(id)
  remove(id)
}
