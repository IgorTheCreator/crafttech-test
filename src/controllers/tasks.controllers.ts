import { NextFunction, Request, Response } from 'express'
import { TaskService, taskService } from '../services'
import createHttpError from 'http-errors'

type ControllerFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>

interface ITaskController {
  createTask: ControllerFunction
  getAllTasks: ControllerFunction
  getTaskById: ControllerFunction
  updateTask: ControllerFunction
  deleteTask: ControllerFunction
}

class TaskController implements ITaskController {
  constructor(private readonly service: TaskService) {}

  async createTask(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const createdTask = await this.service.createTask(req.body)
      res.status(201).json({ task: createdTask })
    } catch (err) {
      next(err)
    }
  }

  async getAllTasks(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const tasks = await this.service.getAllTasks()
      res.status(200).json({ tasks })
    } catch (err) {
      next(err)
    }
  }

  async getTaskById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const task = await this.service.getTaskById(req.params.taskId)
      if (!task) {
        throw createHttpError[404]()
      }
      res.status(200).json({ task })
    } catch (err) {
      next(err)
    }
  }

  async updateTask(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const updatedTask = await this.service.updateTask(
        req.params.taskId,
        req.body.task
      )

      if (!updatedTask) {
        throw createHttpError[404]()
      }

      res.status(200).json({ task: updatedTask })
    } catch (err) {
      next(err)
    }
  }

  async deleteTask(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const deletedTask = await this.service.deleteTask(req.params.taskId)
      if (!deletedTask) {
        throw createHttpError[404]()
      }
      res.send(204)
    } catch (err) {
      next(err)
    }
  }
}

export const taskContoller = new TaskController(taskService)
