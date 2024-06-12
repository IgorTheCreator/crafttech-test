import request from 'supertest'
import { app } from '../src/server'

describe('GET /tasks/:id: получить задачу по ID', () => {
  test('Should return 200 code and task', async () => {
    const responseToCreate = await request(app).post('/tasks').send({
      title: 'task',
      description: 'task description',
      status: true,
    })
    const response = await request(app).get(
      `/tasks/${responseToCreate.body.task.id}`
    )
    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('task')
  })

  test('Should return 404 code', async () => {
    const response = await request(app).get(`/tasks/somerandomid`)
    expect(response.statusCode).toEqual(404)
  })
})
