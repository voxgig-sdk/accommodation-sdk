-- Accommodation SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Accommodation",
      slug = "accommodation",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://tourism.opendatahub.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["accommodation"] = {},
      },
    },
    entity = {
      ["accommodation"] = {
        ["fields"] = {
          {
            ["name"] = "AccoDetail",
            ["title"] = "Acco Detail",
            ["type"] = "`$OBJECT`",
            ["short"] = "Detailed information about the accommodation",
          },
          {
            ["name"] = "AccoTypeId",
            ["title"] = "Acco Type Id",
            ["type"] = "`$STRING`",
            ["short"] = "Type identifier (e.g., hotel, guesthouse)",
          },
          {
            ["name"] = "Active",
            ["title"] = "Active",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the accommodation is active",
          },
          {
            ["name"] = "ContactInfos",
            ["title"] = "Contact Infos",
            ["type"] = "`$OBJECT`",
            ["short"] = "Contact information",
          },
          {
            ["name"] = "Features",
            ["title"] = "Features",
            ["type"] = "`$ARRAY`",
            ["short"] = "List of features and amenities",
          },
          {
            ["name"] = "GpsInfo",
            ["title"] = "Gps Info",
            ["type"] = "`$ARRAY`",
            ["short"] = "GPS coordinates",
          },
          {
            ["name"] = "Id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["short"] = "Unique identifier for the accommodation",
          },
          {
            ["name"] = "LastChange",
            ["title"] = "Last Change",
            ["type"] = "`$STRING`",
            ["short"] = "Last modification timestamp",
            ["format"] = "date-time",
          },
          {
            ["name"] = "LocationInfo",
            ["title"] = "Location Info",
            ["type"] = "`$OBJECT`",
            ["short"] = "Geographic location information",
          },
          {
            ["name"] = "Shortname",
            ["title"] = "Shortname",
            ["type"] = "`$STRING`",
            ["short"] = "Short name of the accommodation",
          },
        },
        ["name"] = "accommodation",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/Accommodation",
                ["segments"] = {
                  {
                    ["lit"] = "Accommodation",
                  },
                },
                ["parts"] = {
                  "Accommodation",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.Items`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "active",
                      ["orig"] = "active",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "langfilter",
                      ["orig"] = "langfilter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "locfilter",
                      ["orig"] = "locfilter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "odhactive",
                      ["orig"] = "odhactive",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pagenumber",
                      ["orig"] = "pagenumber",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "pagesize",
                      ["orig"] = "pagesize",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "searchfilter",
                      ["orig"] = "searchfilter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "seed",
                      ["orig"] = "seed",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "active",
                    "field",
                    "langfilter",
                    "locfilter",
                    "odhactive",
                    "pagenumber",
                    "pagesize",
                    "searchfilter",
                    "seed",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
