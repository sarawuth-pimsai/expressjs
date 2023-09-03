import { NextFunction, Request, Response } from 'express'

export default function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  next()
}
