# Accommodation SDK configuration

module AccommodationConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Accommodation",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://tourism.opendatahub.com/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "accommodation" => {},
        },
      },
      "entity" => {
        "accommodation" => {
          "fields" => [
            {
              "name" => "AccoDetail",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "AccoTypeId",
              "type" => "`$STRING`",
            },
            {
              "name" => "Active",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "ContactInfos",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "Features",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "GpsInfo",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "Id",
              "type" => "`$STRING`",
            },
            {
              "name" => "LastChange",
              "type" => "`$STRING`",
            },
            {
              "name" => "LocationInfo",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "Shortname",
              "type" => "`$STRING`",
            },
          ],
          "name" => "accommodation",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "active",
                        "orig" => "active",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "langfilter",
                        "orig" => "langfilter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "locfilter",
                        "orig" => "locfilter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "odhactive",
                        "orig" => "odhactive",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "pagenumber",
                        "orig" => "pagenumber",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "pagesize",
                        "orig" => "pagesize",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "searchfilter",
                        "orig" => "searchfilter",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "seed",
                        "orig" => "seed",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/Accommodation",
                  "parts" => [
                    "Accommodation",
                  ],
                  "select" => {
                    "exist" => [
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.Items`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    AccommodationFeatures.make_feature(name)
  end
end
