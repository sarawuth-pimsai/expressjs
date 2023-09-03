import BaseException, { ExceptionConfig } from './baseException'

export default class PermissionException extends BaseException {
  constructor(config: Omit<ExceptionConfig, 'type'>) {
    super({ ...config, type: 'PermissionException' })
  }
}
