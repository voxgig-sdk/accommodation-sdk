"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AccommodationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ACCOMMODATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ACCOMMODATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.AccommodationSDK.test();
        const ent = testsdk.Accommodation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ACCOMMODATION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'accommodation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "AccoDetail": { "a": true, "h": "Acco Detail", "n": "AccoDetail", "r": false, "sh": "Detailed information about the accommodation", "t": "`$OBJECT`", "key$": "AccoDetail", "index$": 0 }, "AccoTypeId": { "a": true, "h": "Acco Type Id", "n": "AccoTypeId", "r": false, "sh": "Type identifier (e.g., hotel, guesthouse)", "t": "`$STRING`", "key$": "AccoTypeId", "index$": 1 }, "Active": { "a": true, "h": "Active", "n": "Active", "r": false, "sh": "Whether the accommodation is active", "t": "`$BOOLEAN`", "key$": "Active", "index$": 2 }, "ContactInfos": { "a": true, "h": "Contact Infos", "n": "ContactInfos", "r": false, "sh": "Contact information", "t": "`$OBJECT`", "key$": "ContactInfos", "index$": 3 }, "Features": { "a": true, "h": "Features", "n": "Features", "r": false, "sh": "List of features and amenities", "t": "`$ARRAY`", "key$": "Features", "index$": 4 }, "GpsInfo": { "a": true, "h": "Gps Info", "n": "GpsInfo", "r": false, "sh": "GPS coordinates", "t": "`$ARRAY`", "key$": "GpsInfo", "index$": 5 }, "Id": { "a": true, "h": "Id", "n": "Id", "r": false, "sh": "Unique identifier for the accommodation", "t": "`$STRING`", "key$": "Id", "index$": 6 }, "LastChange": { "a": true, "fo": "date-time", "h": "Last Change", "n": "LastChange", "r": false, "sh": "Last modification timestamp", "t": "`$STRING`", "key$": "LastChange", "index$": 7 }, "LocationInfo": { "a": true, "h": "Location Info", "n": "LocationInfo", "r": false, "sh": "Geographic location information", "t": "`$OBJECT`", "key$": "LocationInfo", "index$": 8 }, "Shortname": { "a": true, "h": "Shortname", "n": "Shortname", "r": false, "sh": "Short name of the accommodation", "t": "`$STRING`", "key$": "Shortname", "index$": 9 } }, "name": "accommodation", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /Accommodation", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "active", "or": "active", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "langfilter", "or": "langfilter", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "locfilter", "or": "locfilter", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "odhactive", "or": "odhactive", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "ex": 1, "k": "query", "n": "pagenumber", "or": "pagenumber", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": 10, "k": "query", "n": "pagesize", "or": "pagesize", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "k": "query", "n": "searchfilter", "or": "searchfilter", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "seed", "or": "seed", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/Accommodation", "q": { "exist": ["active", "field", "langfilter", "locfilter", "odhactive", "pagenumber", "pagesize", "searchfilter", "seed"] }, "r": {}, "s": [{ "lit": "Accommodation" }], "t": { "req": "`reqdata`", "res": "`body.Items`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "accommodation", "name__orig": "accommodation", "Name": "Accommodation", "name_": "accommodation", "name-": "accommodation", "NAME": "ACCOMMODATION", "index$": 0 }, { "active": true, "entity": "accommodation", "key$": "BasicAccommodationFlow", "kind": "basic", "name": "BasicAccommodationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "accommodation_ref01" } }], "index$": 0 }] }, 'Accommodation', { "GET /Accommodation": { "protocol": "http", "operationId": "getAccommodations", "responses": { "200": { "description": "Successful response with accommodation data", "content": { "application/json": { "schema": { "type": "object", "properties": { "TotalResults": { "description": "Total number of accommodations matching the query", "key$": "TotalResults", "type": "integer" }, "TotalPages": { "description": "Total number of pages available", "key$": "TotalPages", "type": "integer" }, "CurrentPage": { "description": "Current page number", "key$": "CurrentPage", "type": "integer" }, "Seed": { "description": "Seed used for random sorting", "key$": "Seed", "type": "string" }, "Items": { "items": { "properties": { "AccoDetail": { "description": "Detailed information about the accommodation", "properties": { "Language": { "description": "Language code", "type": "string" }, "Name": { "description": "Full name of the accommodation", "type": "string" } }, "type": "object", "key$": "AccoDetail" }, "AccoTypeId": { "description": "Type identifier (e.g., hotel, guesthouse)", "type": "string", "key$": "AccoTypeId" }, "Active": { "description": "Whether the accommodation is active", "type": "boolean", "key$": "Active" }, "ContactInfos": { "description": "Contact information", "properties": { "Address": { "description": "Street address", "type": "string" }, "City": { "description": "City name", "type": "string" }, "Email": { "description": "Email address", "type": "string" }, "Phonenumber": { "description": "Phone number", "type": "string" }, "Url": { "description": "Website URL", "type": "string" }, "ZipCode": { "description": "Postal code", "type": "string" } }, "type": "object", "key$": "ContactInfos" }, "Features": { "description": "List of features and amenities", "items": { "properties": { "Id": { "type": "string" }, "Name": { "type": "string" } }, "type": "object" }, "type": "array", "key$": "Features" }, "GpsInfo": { "description": "GPS coordinates", "items": { "properties": { "Altitude": { "format": "double", "type": "number" }, "Latitude": { "format": "double", "type": "number" }, "Longitude": { "format": "double", "type": "number" } }, "type": "object" }, "type": "array", "key$": "GpsInfo" }, "Id": { "description": "Unique identifier for the accommodation", "type": "string", "key$": "Id" }, "LastChange": { "description": "Last modification timestamp", "format": "date-time", "type": "string", "key$": "LastChange" }, "LocationInfo": { "description": "Geographic location information", "properties": { "RegionInfo": { "properties": { "Id": { "type": "string" }, "Name": { "additionalProperties": { "type": "string" }, "type": "object" } }, "type": "object" } }, "type": "object", "key$": "LocationInfo" }, "Shortname": { "description": "Short name of the accommodation", "type": "string", "key$": "Shortname" } }, "type": "object", "index$": 0 }, "key$": "Items", "type": "array" } } } } } }, "400": { "description": "Bad request - Invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } } }, "parameters": [{ "name": "pagesize", "in": "query", "description": "Number of results to return per page", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "pagenumber", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "seed", "in": "query", "description": "Seed for random sorting to ensure consistent results", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "locfilter", "in": "query", "description": "Filter by location (e.g., region, municipality, or tourism association)", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "langfilter", "in": "query", "description": "Language filter for localized content (e.g., en, de, it)", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "fields", "in": "query", "description": "Comma-separated list of fields to include in the response", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "searchfilter", "in": "query", "description": "Search term to filter accommodations by name or description", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "active", "in": "query", "description": "Filter by active status", "required": false, "schema": { "type": "boolean" }, "index$": 7 }, { "name": "odhactive", "in": "query", "description": "Filter by ODH active status", "required": false, "schema": { "type": "boolean" }, "index$": 8 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let accommodation_ref01_data = Object.values(setup.data.existing.accommodation)[0];
        // LIST
        const accommodation_ref01_ent = client.Accommodation();
        const accommodation_ref01_match = {};
        const accommodation_ref01_list = (await accommodation_ref01_ent.list(accommodation_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/accommodation/AccommodationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.AccommodationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['accommodation01', 'accommodation02', 'accommodation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ACCOMMODATION_TEST_ACCOMMODATION_ENTID': idmap,
        'ACCOMMODATION_TEST_LIVE': 'FALSE',
        'ACCOMMODATION_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ACCOMMODATION_TEST_ACCOMMODATION_ENTID'];
    const live = 'TRUE' === env.ACCOMMODATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ACCOMMODATION_TEST_ACCOMMODATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.AccommodationSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.ACCOMMODATION_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AccommodationEntity.test.js.map