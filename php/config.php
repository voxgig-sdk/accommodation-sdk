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
                "slug" => "accommodation",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'title' => 'Acco Detail',
              'type' => '`$OBJECT`',
              'short' => 'Detailed information about the accommodation',
            ],
            [
              'name' => 'AccoTypeId',
              'title' => 'Acco Type Id',
              'type' => '`$STRING`',
              'short' => 'Type identifier (e.g., hotel, guesthouse)',
            ],
            [
              'name' => 'Active',
              'title' => 'Active',
              'type' => '`$BOOLEAN`',
              'short' => 'Whether the accommodation is active',
            ],
            [
              'name' => 'ContactInfos',
              'title' => 'Contact Infos',
              'type' => '`$OBJECT`',
              'short' => 'Contact information',
            ],
            [
              'name' => 'Features',
              'title' => 'Features',
              'type' => '`$ARRAY`',
              'short' => 'List of features and amenities',
            ],
            [
              'name' => 'GpsInfo',
              'title' => 'Gps Info',
              'type' => '`$ARRAY`',
              'short' => 'GPS coordinates',
            ],
            [
              'name' => 'Id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'Unique identifier for the accommodation',
            ],
            [
              'name' => 'LastChange',
              'title' => 'Last Change',
              'type' => '`$STRING`',
              'short' => 'Last modification timestamp',
              'format' => 'date-time',
            ],
            [
              'name' => 'LocationInfo',
              'title' => 'Location Info',
              'type' => '`$OBJECT`',
              'short' => 'Geographic location information',
            ],
            [
              'name' => 'Shortname',
              'title' => 'Shortname',
              'type' => '`$STRING`',
              'short' => 'Short name of the accommodation',
            ],
          ],
          'name' => 'accommodation',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/Accommodation',
                  'segments' => [
                    [
                      'lit' => 'Accommodation',
                    ],
                  ],
                  'parts' => [
                    'Accommodation',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.Items`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'active',
                        'orig' => 'active',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'langfilter',
                        'orig' => 'langfilter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'locfilter',
                        'orig' => 'locfilter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'odhactive',
                        'orig' => 'odhactive',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'pagenumber',
                        'orig' => 'pagenumber',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'pagesize',
                        'orig' => 'pagesize',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'searchfilter',
                        'orig' => 'searchfilter',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'seed',
                        'orig' => 'seed',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
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
