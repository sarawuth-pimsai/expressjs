import BaseException, { ExceptionConfig } from './baseException'

export default class MethodNotAllowedException extends BaseException {
  constructor(config: Omit<ExceptionConfig, 'type'>) {
    super({ ...config, type: 'MethodNotAllowedException' })
  }
}
