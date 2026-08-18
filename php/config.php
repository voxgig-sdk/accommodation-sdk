<?php
declare(strict_types=1);

// Accommodation SDK configuration

class AccommodationConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Accommodation",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://tourism.opendatahub.com/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "accommodation" => [],
                ],
            ],
            "entity" => [
        'accommodation' => [
          'fields' => [
            [
              'name' => 'AccoDetail',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'AccoTypeId',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'Active',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'ContactInfos',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'Features',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'GpsInfo',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'LastChange',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'LocationInfo',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'Shortname',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'accommodation',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'active',
                        'orig' => 'active',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'langfilter',
                        'orig' => 'langfilter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'locfilter',
                        'orig' => 'locfilter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'odhactive',
                        'orig' => 'odhactive',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'pagenumber',
                        'orig' => 'pagenumber',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'pagesize',
                        'orig' => 'pagesize',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'searchfilter',
                        'orig' => 'searchfilter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'seed',
                        'orig' => 'seed',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/Accommodation',
                  'parts' => [
                    'Accommodation',
                  ],
                  'select' => [
                    'exist' => [
                      'active',
                      'field',
                      'langfilter',
                      'locfilter',
                      'odhactive',
                      'pagenumber',
                      'pagesize',
                      'searchfilter',
                      'seed',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.Items`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return AccommodationFeatures::make_feature($name);
    }
}
