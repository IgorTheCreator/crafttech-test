import { TaskRepository, taskRepository } from '../repositories'
import { Task, UserInputTask } from '../types'

interface ITaskService {
  createTask(task: UserInputTask): Promise<Task>
  getAllTasks(): Promise<Task[]>
  getTaskById(taskId: string): Promise<Task | null>
  updateTask(taskId: string, task: UserInputTask): Promise<Task>
  deleteTask(taskId: string): Promise<void>
}

export class TaskService implements ITaskService {
  constructor(private readonly repository: TaskRepository) {}

  async createTask(task: UserInputTask): Promise<Task> {
    const createdTask = await this.repository.createTask(task)

    return createdTask
  }

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.repository.getAllTasks()

    return tasks
  }

  async getTaskById(taskId: string): Promise<Task | null> {
    const task = await this.repository.getTaskById(taskId)

    return task
  }

  async updateTask(taskId: string, task: UserInputTask): Promise<Task> {
    const updatedTask = await this.repository.updateTask(taskId, task)

    return updatedTask
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.repository.deleteTask(taskId)
  }
}

const taskService = new TaskService(taskRepository)
