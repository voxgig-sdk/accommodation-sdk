
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


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
          "short": "Detailed information about the accommodation",
          "type": "`$OBJECT`"
        },
        {
          "name": "AccoTypeId",
          "short": "Type identifier (e.g., hotel, guesthouse)",
          "type": "`$STRING`"
        },
        {
          "name": "Active",
          "short": "Whether the accommodation is active",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "ContactInfos",
          "short": "Contact information",
          "type": "`$OBJECT`"
        },
        {
          "name": "Features",
          "short": "List of features and amenities",
          "type": "`$ARRAY`"
        },
        {
          "name": "GpsInfo",
          "short": "GPS coordinates",
          "type": "`$ARRAY`"
        },
        {
          "name": "Id",
          "short": "Unique identifier for the accommodation",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "LastChange",
          "short": "Last modification timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "LocationInfo",
          "short": "Geographic location information",
          "type": "`$OBJECT`"
        },
        {
          "name": "Shortname",
          "short": "Short name of the accommodation",
          "type": "`$STRING`"
        }
      ],
      "name": "accommodation",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "active",
                    "orig": "active",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "field",
                    "orig": "field",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "langfilter",
                    "orig": "langfilter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "locfilter",
                    "orig": "locfilter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "odhactive",
                    "orig": "odhactive",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "pagenumber",
                    "orig": "pagenumber",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "pagesize",
                    "orig": "pagesize",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "searchfilter",
                    "orig": "searchfilter",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "seed",
                    "orig": "seed",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/Accommodation",
              "segments": [
                {
                  "lit": "Accommodation"
                }
              ],
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
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.Items`"
              },
              "parts": [
                "Accommodation"
              ]
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

