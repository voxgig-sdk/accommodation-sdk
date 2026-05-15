
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AccommodationSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await AccommodationSDK.test()
    equal(null !== testsdk, true)
  })

})
