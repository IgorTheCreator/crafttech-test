import request, { Response } from 'supertest'
import { app } from '../src/server'

describe('PUT /tasks/:id: обновить задачу по ID', () => {
  let responseToCreate: Response

  beforeAll(async () => {
    responseToCreate = await request(app).post('/tasks').send({
      title: 'task',
      description: 'task description',
      status: true,
    })
  })

  test('Should return 200 code and updated task', async () => {
    const response = await request(app)
      .put(`/tasks/${responseToCreate.body.task.id}`)
      .send({
        title: 'new title',
        description: 'new description',
        status: false,
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('task')
  })

  test('Should return 404 code', async () => {
    const response = await request(app).put(`/tasks/somerandomid`).send({
      title: 'new title',
      description: 'new description',
      status: false,
    })
    expect(response.statusCode).toEqual(404)
  })

  test('Should return 400 code and error message', async () => {
    const response = await request(app)
      .put(`/tasks/${responseToCreate.body.task.id}`)
      .send({
        title: 't',
        description: 'new description',
        status: 'wrong value',
      })
    expect(response.statusCode).toEqual(400)
    expect(response.body).toHaveProperty('message')
  })
})
