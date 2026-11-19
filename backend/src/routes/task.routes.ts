import { Router } from 'express'
import * as taskController from '../controllers/task.controller.js'
import { validateBody } from '../middlewares/validate-body.js'
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js'

const router = Router()

router.get('/', taskController.list)
router.get('/:id', taskController.getById)
router.post('/', validateBody(createTaskSchema), taskController.create)
router.patch('/:id', validateBody(updateTaskSchema), taskController.update)
router.delete('/:id', taskController.remove)

export default router
