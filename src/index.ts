import express from 'express'
import { taskRouter } from './routes'
import { errorHandling, notFoundErrorHandling } from './middlewares'

const app = express()
const port = 3000

app.use(express.json())

app.use('/tasks', taskRouter)

// Подключение обработки 404 ошибки
app.use(notFoundErrorHandling)

// Подключение обработки ошибок
app.use(errorHandling)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
