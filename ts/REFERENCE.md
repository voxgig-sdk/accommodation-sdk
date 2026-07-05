# Accommodation TypeScript SDK Reference

Complete API reference for the Accommodation TypeScript SDK.


## AccommodationSDK

### Constructor

```ts
new AccommodationSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AccommodationSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = AccommodationSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `AccommodationSDK` instance in test mode.


### Instance Methods

#### `Accommodation(data?: object)`

Create a new `Accommodation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccommodationEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `AccommodationSDK.test()`.

**Returns:** `AccommodationSDK` instance in test mode.


---

## AccommodationEntity

```ts
const accommodation = client.Accommodation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acco_detail` | `Record<string, any>` | No |  |
| `acco_type_id` | `string` | No |  |
| `active` | `boolean` | No |  |
| `contact_info` | `Record<string, any>` | No |  |
| `feature` | `any[]` | No |  |
| `gps_info` | `any[]` | No |  |
| `id` | `string` | No |  |
| `last_change` | `string` | No |  |
| `location_info` | `Record<string, any>` | No |  |
| `shortname` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Accommodation().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccommodationEntity` instance with the same client and
options.

#### `client()`

Return the parent `AccommodationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new AccommodationSDK({
  feature: {
    test: { active: true },
  }
})
```

