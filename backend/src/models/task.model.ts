import type { Task, UpdateTask } from '../types/task.js'
import type { CategoryValue } from '../config/categories.js'

interface TaskFilters {
  search?: string
  category?: CategoryValue
}

const tasks: Task[] = []

export function create(task: Task): Task {
  tasks.push(task)
  return task
}

export function findAll(filters: TaskFilters = {}): Task[] {
  const term = filters.search?.trim().toLowerCase()

  return tasks.filter((t) => {
    const matchesSearch = !term || t.title.toLowerCase().includes(term)
    const matchesCategory = !filters.category || t.category === filters.category
    return matchesSearch && matchesCategory
  })
}

export function findById(id: string): Task | undefined {
  return tasks.find((t) => t.id === id)
}

export function update(id: string, changes: UpdateTask): Task | undefined {
  const index = tasks.findIndex((t) => t.id === id)
  if (index === -1) return undefined

  const updated = { ...tasks[index], ...changes }
  tasks[index] = updated
  return updated
}

export function remove(id: string): boolean {
  const index = tasks.findIndex((t) => t.id === id)

  if (index === -1) return false
  tasks.splice(index, 1)
  return true
}
