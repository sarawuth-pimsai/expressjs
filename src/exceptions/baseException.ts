export type ExceptionConfig = {
  message: string
  type: string
  code: string
  description?: object[]
}
export default class BaseException extends Error {
  message: string
  type: string
  code: string
  description?: object[]
  constructor(config: ExceptionConfig) {
    super(config.message)
    Object.setPrototypeOf(this, new.target.prototype)
    this.code = config.code
    this.message = config.message
    this.type = config.type
    this.description = config.description
    Error.captureStackTrace(this)
  }
}
