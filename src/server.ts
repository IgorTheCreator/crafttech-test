import express from 'express'
import { taskRouter } from './routes'
import { errorHandling, notFoundErrorHandling } from './middlewares'

export const app = express()

app.use(express.json())

app.use('/tasks', taskRouter)

// Подключение обработки 404 ошибки
app.use(notFoundErrorHandling)

// Подключение обработки ошибок
app.use(errorHandling)
