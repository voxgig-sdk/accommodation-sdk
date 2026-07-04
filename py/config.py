# Accommodation SDK configuration


def make_config():
    return {
        "main": {
            "name": "Accommodation",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://tourism.opendatahub.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "accommodation": {},
            },
        },
        "entity": {
      "accommodation": {
        "fields": [
          {
            "active": True,
            "name": "acco_detail",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "acco_type_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "active",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "contact_info",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "feature",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "gps_info",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "last_change",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "location_info",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "shortname",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "accommodation",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "active",
                      "orig": "active",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "langfilter",
                      "orig": "langfilter",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "locfilter",
                      "orig": "locfilter",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "odhactive",
                      "orig": "odhactive",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": 1,
                      "kind": "query",
                      "name": "pagenumber",
                      "orig": "pagenumber",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "pagesize",
                      "orig": "pagesize",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "searchfilter",
                      "orig": "searchfilter",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "seed",
                      "orig": "seed",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/Accommodation",
                "parts": [
                  "Accommodation",
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
                    "seed",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
