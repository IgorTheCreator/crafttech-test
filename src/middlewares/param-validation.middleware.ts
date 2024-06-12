import { NextFunction, Request, Response } from 'express'
import { TaskIdSchema } from '../schemas'
import createHttpError from 'http-errors'

export function paramValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Проверка валидности id
    const parseResult = TaskIdSchema.safeParse(req.params.taskId)
    if (!parseResult.success) {
      throw createHttpError[404]()
    }
    next()
  } catch (err) {
    next(err)
  }
}
