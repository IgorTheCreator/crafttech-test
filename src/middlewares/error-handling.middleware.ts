import { NextFunction, Request, Response } from 'express'

export function errorHandling(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.status || 500
  console.error(err.message)

  res.status(statusCode).json({ message: err.message })
}
