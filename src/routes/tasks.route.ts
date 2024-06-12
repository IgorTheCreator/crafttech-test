import { Router } from 'express'
import { TaskController, taskController } from '../controllers'
import { bodyValidation } from '../middlewares/body-validation.middleware'
import { paramValidation } from '../middlewares'

export class TaskRouter {
  taskRouter = Router()
  constructor(private readonly taskController: TaskController) {
    this.init()
  }

  init() {
    // POST /tasks: создать новую задачу
    this.taskRouter.post(
      '/',
      bodyValidation,
      this.taskController.createTask.bind(taskController)
    )

    // GET /tasks: получить список всех задач
    this.taskRouter.get(
      '/',
      this.taskController.getAllTasks.bind(taskController)
    )

    // GET /tasks/:id: получить задачу по ID
    this.taskRouter.get(
      '/:taskId',
      paramValidation,
      this.taskController.getTaskById.bind(taskController)
    )

    // PUT /tasks/:id: обновить задачу по ID
    this.taskRouter.put(
      '/:taskId',
      paramValidation,
      bodyValidation,
      this.taskController.updateTask.bind(taskController)
    )

    // DELETE /tasks/:id: удалить задачу по ID
    this.taskRouter.delete(
      '/:taskId',
      paramValidation,
      this.taskController.deleteTask.bind(taskController)
    )
  }
}

export const taskRouter = new TaskRouter(taskController).taskRouter
