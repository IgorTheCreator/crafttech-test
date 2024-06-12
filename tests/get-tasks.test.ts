import request from 'supertest'
import { app } from '../src/server'

describe('GET /tasks: получить список всех задач', () => {
  test('Should return 200 code and tasks array', async () => {
    const response = await request(app).get('/tasks')
    expect(response.statusCode).toEqual(200)
    expect(response.body).toHaveProperty('tasks')
  })
})
