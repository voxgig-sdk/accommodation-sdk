
import { Context } from './Context'


class AccommodationError extends Error {

  isAccommodationError = true

  sdk = 'Accommodation'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AccommodationError
}

