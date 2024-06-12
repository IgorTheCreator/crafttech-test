import { NextFunction, Request, Response } from 'express'
import { UserInputTaskSchema } from '../schemas'
import createHttpError from 'http-errors'

export function bodyValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // Проверка валидности тела запроса
    const parseResult = UserInputTaskSchema.safeParse(req.body)
    if (!parseResult.success) {
      throw createHttpError[400]()
    }
    next()
  } catch (err) {
    next(err)
  }
}
