import { Router } from 'express'
import taskRoutes from './task.routes.js'
import categoryRoutes from './category.routes.js'

const router = Router()

router.use('/tasks', taskRoutes)
router.use('/categories', categoryRoutes)

export default router
