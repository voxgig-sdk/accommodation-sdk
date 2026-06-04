# Accommodation SDK

Browse hotels, guesthouses, and other South Tyrol lodging from the Open Data Hub tourism dataset

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Accommodation API

The Accommodation API is part of the [Open Data Hub](https://tourism.opendatahub.com/) tourism dataset, operated by [NOI Techpark](https://noi.bz.it/) in South Tyrol, Italy. It exposes a catalogue of lodging properties — hotels, guesthouses, B&Bs and similar — that can be consulted for travel planning, research, or building booking-adjacent tools.

What you can typically retrieve:

- Lists of accommodation properties with descriptive metadata
- Location data (GPS coordinates) and contact information
- Service types, categorisations, and free-text descriptions
- Image references with their own copyright / licence metadata
- Revision timestamps for change tracking

The service is served from `https://tourism.api.opendatahub.com` and is browsable via a Swagger UI. No authentication is documented for public read access; rate limits and CORS behaviour are not formally published — check the Open Data Hub portal for current operational guidance.

## Try it

**TypeScript**
```bash
npm install accommodation
```

**Python**
```bash
pip install accommodation-sdk
```

**PHP**
```bash
composer require voxgig/accommodation-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/accommodation-sdk/go
```

**Ruby**
```bash
gem install accommodation-sdk
```

**Lua**
```bash
luarocks install accommodation-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AccommodationSDK } from 'accommodation'

const client = new AccommodationSDK({})

// List all accommodations
const accommodations = await client.Accommodation().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o accommodation-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "accommodation": {
      "command": "/abs/path/to/accommodation-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Accommodation** | A lodging property (hotel, guesthouse, B&B, etc.) in the Open Data Hub tourism catalogue, exposed via the `/v1/Accommodation` endpoint. | `/Accommodation` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from accommodation_sdk import AccommodationSDK

client = AccommodationSDK({})

# List all accommodations
accommodations, err = client.Accommodation(None).list(None, None)
```

### PHP

```php
<?php
require_once 'accommodation_sdk.php';

$client = new AccommodationSDK([]);

// List all accommodations
[$accommodations, $err] = $client->Accommodation(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/accommodation-sdk/go"

client := sdk.NewAccommodationSDK(map[string]any{})

// List all accommodations
accommodations, err := client.Accommodation(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Accommodation_sdk"

client = AccommodationSDK.new({})

# List all accommodations
accommodations, err = client.Accommodation(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("accommodation_sdk")

local client = sdk.new({})

-- List all accommodations
local accommodations, err = client:Accommodation(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AccommodationSDK.test()
const result = await client.Accommodation().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AccommodationSDK.test(None, None)
result, err = client.Accommodation(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AccommodationSDK::test(null, null);
[$result, $err] = $client->Accommodation(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Accommodation(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AccommodationSDK.test(nil, nil)
result, err = client.Accommodation(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Accommodation(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Accommodation API

- Upstream: [https://tourism.opendatahub.com/api](https://tourism.opendatahub.com/api)
- API docs: [https://tourism.api.opendatahub.com/swagger/index.html](https://tourism.api.opendatahub.com/swagger/index.html)

- Data is published under the [Creative Commons CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) Public Domain Dedication.
- Licensor is listed as [NOI Techpark](https://noi.bz.it/) (South Tyrol / Alto Adige).
- Attribution is not legally required, but crediting Open Data Hub / NOI Techpark is encouraged.
- Check individual records for image copyright fields — media items may carry their own licence metadata.

---

Generated from the Accommodation API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
