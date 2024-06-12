import { Task, UserInputTask } from '../types'
import { PrismaClient } from '@prisma/client'

interface ITaskRepository {
  createTask(task: UserInputTask): Promise<Task>
  getAllTasks(): Promise<Task[]>
  getTaskById(taskId: string): Promise<Task | null>
  updateTask(taskId: string, task: UserInputTask): Promise<Task>
  deleteTask(taskId: string): Promise<void>
}

class TaskRepository implements ITaskRepository {
  constructor(private readonly db: PrismaClient) {}

  async createTask(task: UserInputTask): Promise<Task> {
    const createdTask = await this.db.task.create({
      data: {
        ...task,
      },
    })

    return createdTask
  }

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.db.task.findMany()

    return tasks
  }

  async getTaskById(taskId: string): Promise<Task | null> {
    const task = await this.db.task.findFirst({
      where: {
        id: taskId,
      },
    })

    return task
  }

  async updateTask(taskId: string, task: UserInputTask): Promise<Task> {
    const updatedTask = await this.db.task.update({
      data: {
        ...task,
      },
      where: {
        id: taskId,
      },
    })

    return updatedTask
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.db.task.delete({
      where: {
        id: taskId,
      },
    })
  }
}

const db = new PrismaClient()
export const taskRepository = new TaskRepository(db)
