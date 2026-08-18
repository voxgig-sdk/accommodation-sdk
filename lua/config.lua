-- Accommodation SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Accommodation",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "AccoTypeId",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "Active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "ContactInfos",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "Features",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "GpsInfo",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "LastChange",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "LocationInfo",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "Shortname",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "accommodation",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "active",
                      ["orig"] = "active",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "langfilter",
                      ["orig"] = "langfilter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "locfilter",
                      ["orig"] = "locfilter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "odhactive",
                      ["orig"] = "odhactive",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "pagenumber",
                      ["orig"] = "pagenumber",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "pagesize",
                      ["orig"] = "pagesize",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "searchfilter",
                      ["orig"] = "searchfilter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "seed",
                      ["orig"] = "seed",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/Accommodation",
                ["parts"] = {
                  "Accommodation",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.Items`",
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
