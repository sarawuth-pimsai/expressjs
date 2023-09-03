import BaseException, { ExceptionConfig } from './baseException'

export default class AuthorizationException extends BaseException {
  constructor(config: Omit<ExceptionConfig, 'type'>) {
    super({ ...config, type: 'AuthorizationException' })
  }
}
