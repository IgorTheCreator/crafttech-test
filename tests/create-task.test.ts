import request from 'supertest'
import { app } from '../src/server'

describe('POST /tasks: создать новую задачу', () => {
  test('Should return 201 code and created task', async () => {
    const response = await request(app).post('/tasks').send({
      title: 'task',
      description: 'task description',
      status: true,
    })
    expect(response.statusCode).toEqual(201)
    expect(response.body).toHaveProperty('task')
  })

  test('Should return 400 code', async () => {
    const response = await request(app).post('/tasks').send({
      title: 't',
      status: 'wrong value',
    })
    expect(response.statusCode).toEqual(400)
  })
})
