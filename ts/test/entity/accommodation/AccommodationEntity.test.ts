

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AccommodationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('AccommodationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ACCOMMODATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('ACCOMMODATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AccommodationSDK.test()
    const ent = testsdk.Accommodation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ACCOMMODATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'accommodation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"AccoDetail","req":false,"short":"Detailed information about the accommodation","type":"`$OBJECT`","index$":0},{"active":true,"name":"AccoTypeId","req":false,"short":"Type identifier (e.g., hotel, guesthouse)","type":"`$STRING`","index$":1},{"active":true,"name":"Active","req":false,"short":"Whether the accommodation is active","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"ContactInfos","req":false,"short":"Contact information","type":"`$OBJECT`","index$":3},{"active":true,"name":"Features","req":false,"short":"List of features and amenities","type":"`$ARRAY`","index$":4},{"active":true,"name":"GpsInfo","req":false,"short":"GPS coordinates","type":"`$ARRAY`","index$":5},{"active":true,"name":"Id","req":false,"short":"Unique identifier for the accommodation","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"LastChange","req":false,"short":"Last modification timestamp","type":"`$STRING`","index$":7},{"active":true,"name":"LocationInfo","req":false,"short":"Geographic location information","type":"`$OBJECT`","index$":8},{"active":true,"name":"Shortname","req":false,"short":"Short name of the accommodation","type":"`$STRING`","index$":9}],"name":"accommodation","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"langfilter","orig":"langfilter","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"locfilter","orig":"locfilter","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"odhactive","orig":"odhactive","reqd":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"example":1,"kind":"query","name":"pagenumber","orig":"pagenumber","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"example":10,"kind":"query","name":"pagesize","orig":"pagesize","reqd":false,"type":"`$INTEGER`","index$":6},{"active":true,"kind":"query","name":"searchfilter","orig":"searchfilter","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"seed","orig":"seed","reqd":false,"type":"`$STRING`","index$":8}]},"contract":{"id":"GET /Accommodation","json":"{\"operationId\":\"getAccommodations\",\"parameters\":[{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"pagesize\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"pagenumber\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Seed for random sorting to ensure consistent results\",\"in\":\"query\",\"name\":\"seed\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by location (e.g., region, municipality, or tourism association)\",\"in\":\"query\",\"name\":\"locfilter\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Language filter for localized content (e.g., en, de, it)\",\"in\":\"query\",\"name\":\"langfilter\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of fields to include in the response\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Search term to filter accommodations by name or description\",\"in\":\"query\",\"name\":\"searchfilter\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by active status\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"Filter by ODH active status\",\"in\":\"query\",\"name\":\"odhactive\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"CurrentPage\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"Items\":{\"items\":{\"properties\":{\"AccoDetail\":{\"description\":\"Detailed information about the accommodation\",\"properties\":{\"Language\":{\"description\":\"Language code\",\"type\":\"string\"},\"Name\":{\"description\":\"Full name of the accommodation\",\"type\":\"string\"}},\"type\":\"object\"},\"AccoTypeId\":{\"description\":\"Type identifier (e.g., hotel, guesthouse)\",\"type\":\"string\"},\"Active\":{\"description\":\"Whether the accommodation is active\",\"type\":\"boolean\"},\"ContactInfos\":{\"description\":\"Contact information\",\"properties\":{\"Address\":{\"description\":\"Street address\",\"type\":\"string\"},\"City\":{\"description\":\"City name\",\"type\":\"string\"},\"Email\":{\"description\":\"Email address\",\"type\":\"string\"},\"Phonenumber\":{\"description\":\"Phone number\",\"type\":\"string\"},\"Url\":{\"description\":\"Website URL\",\"type\":\"string\"},\"ZipCode\":{\"description\":\"Postal code\",\"type\":\"string\"}},\"type\":\"object\"},\"Features\":{\"description\":\"List of features and amenities\",\"items\":{\"properties\":{\"Id\":{\"type\":\"string\"},\"Name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"GpsInfo\":{\"description\":\"GPS coordinates\",\"items\":{\"properties\":{\"Altitude\":{\"format\":\"double\",\"type\":\"number\"},\"Latitude\":{\"format\":\"double\",\"type\":\"number\"},\"Longitude\":{\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"Id\":{\"description\":\"Unique identifier for the accommodation\",\"type\":\"string\"},\"LastChange\":{\"description\":\"Last modification timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"LocationInfo\":{\"description\":\"Geographic location information\",\"properties\":{\"RegionInfo\":{\"properties\":{\"Id\":{\"type\":\"string\"},\"Name\":{\"additionalProperties\":{\"type\":\"string\"},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"Shortname\":{\"description\":\"Short name of the accommodation\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"Seed\":{\"description\":\"Seed used for random sorting\",\"type\":\"string\"},\"TotalPages\":{\"description\":\"Total number of pages available\",\"type\":\"integer\"},\"TotalResults\":{\"description\":\"Total number of accommodations matching the query\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with accommodation data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/Accommodation","segments":[{"lit":"Accommodation"}],"select":{"exist":["active","field","langfilter","locfilter","odhactive","pagenumber","pagesize","searchfilter","seed"]},"transform":{"req":"`reqdata`","res":"`body.Items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"accommodation","name__orig":"accommodation","Name":"Accommodation","name_":"accommodation","name-":"accommodation","NAME":"ACCOMMODATION","index$":0}, {"active":true,"entity":"accommodation","key$":"BasicAccommodationFlow","kind":"basic","name":"BasicAccommodationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"accommodation_ref01"}}],"index$":0}]}, 'Accommodation')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let accommodation_ref01_data = Object.values(setup.data.existing.accommodation)[0] as any

    // LIST
    const accommodation_ref01_ent = client.Accommodation()
    const accommodation_ref01_match: any = {}

    const accommodation_ref01_list = (await accommodation_ref01_ent.list(accommodation_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/accommodation/AccommodationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AccommodationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['accommodation01','accommodation02','accommodation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ACCOMMODATION_TEST_ACCOMMODATION_ENTID': idmap,
    'ACCOMMODATION_TEST_LIVE': 'FALSE',
    'ACCOMMODATION_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ACCOMMODATION_TEST_ACCOMMODATION_ENTID']

  const live = 'TRUE' === env.ACCOMMODATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ACCOMMODATION_TEST_ACCOMMODATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AccommodationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ACCOMMODATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
