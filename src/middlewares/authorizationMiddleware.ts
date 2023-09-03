import { NextFunction, Request, Response } from 'express'

export default function authorizationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  next()
}
