import BaseException from '@exceptions/baseException'
import NotImplementException from '@exceptions/notImplementException'
import { Request, Response } from 'express'

export default class UserHandler {
  static create(req: Request, res: Response) {
    try {
      throw new NotImplementException('Not implement')
    } catch (error) {
      return res.json({ error })
    }
  }
  static update(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
  static delete(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
  static get(req: Request, res: Response) {
    try {
      return res.json({ love: 'test' })
    } catch (error) {}
  }
  static list(req: Request, res: Response) {
    try {
      throw new NotImplementException('Not implement')
    } catch (error) {
      if (error instanceof BaseException) {
        return res.json({ message: error.stack?.split('\n') })
      } else if (error instanceof Error) {
        return res.json({ message: error.message })
      }
    }
  }
}
