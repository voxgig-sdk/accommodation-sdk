
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Accommodation',
        slug: "accommodation",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://tourism.opendatahub.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        accommodation: {
        },
  
    }
  }


  entity = {
    "accommodation": {
      "fields": [
        {
          "name": "AccoDetail",
          "title": "Acco Detail",
          "type": "`$OBJECT`",
          "short": "Detailed information about the accommodation"
        },
        {
          "name": "AccoTypeId",
          "title": "Acco Type Id",
          "type": "`$STRING`",
          "short": "Type identifier (e.g., hotel, guesthouse)"
        },
        {
          "name": "Active",
          "title": "Active",
          "type": "`$BOOLEAN`",
          "short": "Whether the accommodation is active"
        },
        {
          "name": "ContactInfos",
          "title": "Contact Infos",
          "type": "`$OBJECT`",
          "short": "Contact information"
        },
        {
          "name": "Features",
          "title": "Features",
          "type": "`$ARRAY`",
          "short": "List of features and amenities"
        },
        {
          "name": "GpsInfo",
          "title": "Gps Info",
          "type": "`$ARRAY`",
          "short": "GPS coordinates"
        },
        {
          "name": "Id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the accommodation"
        },
        {
          "name": "LastChange",
          "title": "Last Change",
          "type": "`$STRING`",
          "short": "Last modification timestamp",
          "format": "date-time"
        },
        {
          "name": "LocationInfo",
          "title": "Location Info",
          "type": "`$OBJECT`",
          "short": "Geographic location information"
        },
        {
          "name": "Shortname",
          "title": "Shortname",
          "type": "`$STRING`",
          "short": "Short name of the accommodation"
        }
      ],
      "name": "accommodation",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/Accommodation",
              "segments": [
                {
                  "lit": "Accommodation"
                }
              ],
              "parts": [
                "Accommodation"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.Items`"
              },
              "args": {
                "query": [
                  {
                    "name": "active",
                    "orig": "active",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "field",
                    "orig": "field",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "langfilter",
                    "orig": "langfilter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "locfilter",
                    "orig": "locfilter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "odhactive",
                    "orig": "odhactive",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "pagenumber",
                    "orig": "pagenumber",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  },
                  {
                    "name": "pagesize",
                    "orig": "pagesize",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 10
                  },
                  {
                    "name": "searchfilter",
                    "orig": "searchfilter",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "seed",
                    "orig": "seed",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "active",
                  "field",
                  "langfilter",
                  "locfilter",
                  "odhactive",
                  "pagenumber",
                  "pagesize",
                  "searchfilter",
                  "seed"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

