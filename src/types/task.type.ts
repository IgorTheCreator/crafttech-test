export type Task = {
  id: string
  title: string
  description: string | null
  status: boolean
  createdAt: Date
  updatedAt: Date
}
