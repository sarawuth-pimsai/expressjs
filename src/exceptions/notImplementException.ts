import BaseException, { ExceptionConfig } from './baseException'

type ErrorOptions = {
  code: string
  description?: object[]
}
export default class NotImplementException extends BaseException {
  constructor(message: string, option: ErrorOptions = { code: '404' }) {
    super({
      ...option,
      message,
      type: 'NotImplementException',
    })
  }
}
