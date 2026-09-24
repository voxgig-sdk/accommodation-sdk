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
            "title": "Acco Detail",
            "type": "`$OBJECT`",
            "short": "Detailed information about the accommodation",
          },
          {
            "name": "AccoTypeId",
            "title": "Acco Type Id",
            "type": "`$STRING`",
            "short": "Type identifier (e.g., hotel, guesthouse)",
          },
          {
            "name": "Active",
            "title": "Active",
            "type": "`$BOOLEAN`",
            "short": "Whether the accommodation is active",
          },
          {
            "name": "ContactInfos",
            "title": "Contact Infos",
            "type": "`$OBJECT`",
            "short": "Contact information",
          },
          {
            "name": "Features",
            "title": "Features",
            "type": "`$ARRAY`",
            "short": "List of features and amenities",
          },
          {
            "name": "GpsInfo",
            "title": "Gps Info",
            "type": "`$ARRAY`",
            "short": "GPS coordinates",
          },
          {
            "name": "Id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the accommodation",
          },
          {
            "name": "LastChange",
            "title": "Last Change",
            "type": "`$STRING`",
            "short": "Last modification timestamp",
            "format": "date-time",
          },
          {
            "name": "LocationInfo",
            "title": "Location Info",
            "type": "`$OBJECT`",
            "short": "Geographic location information",
          },
          {
            "name": "Shortname",
            "title": "Shortname",
            "type": "`$STRING`",
            "short": "Short name of the accommodation",
          },
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
                    "lit": "Accommodation",
                  },
                ],
                "parts": [
                  "Accommodation",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.Items`",
                },
                "args": {
                  "query": [
                    {
                      "name": "active",
                      "orig": "active",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "field",
                      "orig": "field",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "langfilter",
                      "orig": "langfilter",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "locfilter",
                      "orig": "locfilter",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "odhactive",
                      "orig": "odhactive",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                    },
                    {
                      "name": "pagenumber",
                      "orig": "pagenumber",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "pagesize",
                      "orig": "pagesize",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "searchfilter",
                      "orig": "searchfilter",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "seed",
                      "orig": "seed",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
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
                    "seed",
                  ],
                },
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
