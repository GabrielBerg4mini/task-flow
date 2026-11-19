import type { CategoryValue } from '../config/categories.js'

export type StatusTask = 'todo' | 'in_progress' | 'completed'
export type PriorityTask = 'high' | 'normal' | 'low'

export interface Task {
  readonly id: string
  category: CategoryValue
  dueDate: string
  progress: number
  title: string
  description: string
  status: StatusTask
  priority: PriorityTask
}

export type UpdateTask = Partial<Omit<Task, 'id' | 'progress'>>

type StatusCreatedTask = Exclude<StatusTask, 'completed'>
export type CreateTaskDto = Pick<
  Task,
  'category' | 'title' | 'priority' | 'description' | 'dueDate'
> & {
  status?: StatusCreatedTask
}
