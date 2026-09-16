# Accommodation SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Accommodation",
            "slug": "accommodation",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "AccoDetail",
            "short": "Detailed information about the accommodation",
            "type": "`$OBJECT`",
          },
          {
            "name": "AccoTypeId",
            "short": "Type identifier (e.g., hotel, guesthouse)",
            "type": "`$STRING`",
          },
          {
            "name": "Active",
            "short": "Whether the accommodation is active",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "ContactInfos",
            "short": "Contact information",
            "type": "`$OBJECT`",
          },
          {
            "name": "Features",
            "short": "List of features and amenities",
            "type": "`$ARRAY`",
          },
          {
            "name": "GpsInfo",
            "short": "GPS coordinates",
            "type": "`$ARRAY`",
          },
          {
            "name": "Id",
            "short": "Unique identifier for the accommodation",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "LastChange",
            "short": "Last modification timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "LocationInfo",
            "short": "Geographic location information",
            "type": "`$OBJECT`",
          },
          {
            "name": "Shortname",
            "short": "Short name of the accommodation",
            "type": "`$STRING`",
          },
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
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "langfilter",
                      "orig": "langfilter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "locfilter",
                      "orig": "locfilter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "odhactive",
                      "orig": "odhactive",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "pagenumber",
                      "orig": "pagenumber",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "pagesize",
                      "orig": "pagesize",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "searchfilter",
                      "orig": "searchfilter",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "seed",
                      "orig": "seed",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/Accommodation",
                "segments": [
                  {
                    "lit": "Accommodation",
                  },
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
                  "res": "`body.Items`",
                },
                "parts": [
                  "Accommodation",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
