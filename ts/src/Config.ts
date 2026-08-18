
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Accommodation',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$OBJECT`"
        },
        {
          "name": "AccoTypeId",
          "type": "`$STRING`"
        },
        {
          "name": "Active",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "ContactInfos",
          "type": "`$OBJECT`"
        },
        {
          "name": "Features",
          "type": "`$ARRAY`"
        },
        {
          "name": "GpsInfo",
          "type": "`$ARRAY`"
        },
        {
          "name": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "LastChange",
          "type": "`$STRING`"
        },
        {
          "name": "LocationInfo",
          "type": "`$OBJECT`"
        },
        {
          "name": "Shortname",
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
              "parts": [
                "Accommodation"
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
  config
}

