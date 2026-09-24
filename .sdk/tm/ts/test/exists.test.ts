
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AccommodationSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = AccommodationSDK.test()
    equal(testsdk instanceof AccommodationSDK, true,
      'AccommodationSDK.test() must return a client synchronously')
  })

})
