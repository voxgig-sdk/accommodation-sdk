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
            ["short"] = "Detailed information about the accommodation",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "AccoTypeId",
            ["short"] = "Type identifier (e.g., hotel, guesthouse)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "Active",
            ["short"] = "Whether the accommodation is active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "ContactInfos",
            ["short"] = "Contact information",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "Features",
            ["short"] = "List of features and amenities",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "GpsInfo",
            ["short"] = "GPS coordinates",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "Id",
            ["short"] = "Unique identifier for the accommodation",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "LastChange",
            ["short"] = "Last modification timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "LocationInfo",
            ["short"] = "Geographic location information",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "Shortname",
            ["short"] = "Short name of the accommodation",
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
