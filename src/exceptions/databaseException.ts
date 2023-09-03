import BaseException, { ExceptionConfig } from './baseException'

export default class DatabaseException extends BaseException {
  constructor(config: Omit<ExceptionConfig, 'type'>) {
    super({ ...config, type: 'DatabaseException' })
  }
}
