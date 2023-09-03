import UserHandler from '@handlers/userHandler'
import express, { Express, Router } from 'express'

export default function userRouter(app: Express, endpoint: string) {
  const router: Router = express.Router()
  router.get('/', UserHandler.list)
  router.post('/', UserHandler.create)
  router.get('/:id', UserHandler.get)
  router.put('/:id', UserHandler.update)
  router.delete('/:id', UserHandler.delete)
  app.use(`${endpoint}`, router)
}
