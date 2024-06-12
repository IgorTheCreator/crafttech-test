import { z } from 'zod'

export const UserInputTaskSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Длина должна быть больше 3-х символов' }),
  description: z.string().optional(),
  status: z.boolean({
    message: 'Должно быть логическим значением (true или false)',
  }),
})
