import userRouter from '@routes/userRouter'
import express, { Express } from 'express'

function run(port: number) {
  const app: Express = express()
  userRouter(app, '/users')
  app.listen(port, function () {
    console.log(`Application running on port: ${port}`)
  })
}
run(3000)
