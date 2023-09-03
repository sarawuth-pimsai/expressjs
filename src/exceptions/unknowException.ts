import BaseException, { ExceptionConfig } from './baseException'

export default class UnknowException extends BaseException {
  constructor(config: Omit<ExceptionConfig, 'type'>) {
    super({ ...config, type: 'UnknowException' })
  }
}
