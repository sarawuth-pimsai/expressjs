import BaseException, { ExceptionConfig } from './baseException'

export default class InvalidParameterException extends BaseException {
  constructor(config: Omit<ExceptionConfig, 'type'>) {
    super({ ...config, type: 'InvalidParameterException' })
  }
}
