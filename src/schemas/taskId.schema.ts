import { z } from 'zod'

export const TaskIdSchema = z.string().uuid()
