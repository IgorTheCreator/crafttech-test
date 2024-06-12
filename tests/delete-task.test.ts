import request, { Response } from 'supertest'
import { app } from '../src/server'

describe('DELETE /tasks/:id: удалить задачу по ID', () => {
  let responseToCreate: Response

  beforeAll(async () => {
    responseToCreate = await request(app).post('/tasks').send({
      title: 'task',
      description: 'task description',
      status: true,
    })
  })

  test('Should return 204 code', async () => {
    const response = await request(app).delete(
      `/tasks/${responseToCreate.body.task.id}`
    )

    expect(response.statusCode).toEqual(204)
  })

  test('Should return 404 code', async () => {
    const response = await request(app).delete(`/tasks/somerandomid`)
    expect(response.statusCode).toEqual(404)
  })
})
