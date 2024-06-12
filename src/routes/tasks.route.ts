import { Router } from 'express'
import { taskContoller } from '../controllers'
import { bodyValidation } from '../middlewares/body-validation.middleware'
import { paramValidation } from '../middlewares'

export const taskRouter = Router()

// POST /tasks: создать новую задачу
taskRouter.post(
  '/',
  bodyValidation,
  taskContoller.createTask.bind(taskContoller)
)

// GET /tasks: получить список всех задач
taskRouter.get('/', taskContoller.getAllTasks.bind(taskContoller))

// GET /tasks/:id: получить задачу по ID
taskRouter.get(
  '/:taskId',
  paramValidation,
  taskContoller.getTaskById.bind(taskContoller)
)

// PUT /tasks/:id: обновить задачу по ID
taskRouter.put(
  '/:taskId',
  paramValidation,
  bodyValidation,
  taskContoller.updateTask.bind(taskContoller)
)

// DELETE /tasks/:id: удалить задачу по ID
taskRouter.delete(
  '/:taskId',
  paramValidation,
  taskContoller.deleteTask.bind(taskContoller)
)
