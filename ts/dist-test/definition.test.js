"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "accommodation",
        "accessor": "Accommodation",
        "op": "list",
        "method": "GET",
        "path": "/Accommodation",
        "args": [],
        "select": {
            "active": "v1",
            "field": "v1",
            "langfilter": "v1",
            "locfilter": "v1",
            "odhactive": "v1",
            "pagenumber": 1,
            "pagesize": 10,
            "searchfilter": "v1",
            "seed": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "pagesize",
            "pagenumber",
            "seed",
            "locfilter",
            "langfilter",
            "fields",
            "searchfilter",
            "active",
            "odhactive"
        ],
        "queryArgs": [
            {
                "name": "active",
                "wire": "active"
            },
            {
                "name": "field",
                "wire": "fields"
            },
            {
                "name": "langfilter",
                "wire": "langfilter"
            },
            {
                "name": "locfilter",
                "wire": "locfilter"
            },
            {
                "name": "odhactive",
                "wire": "odhactive"
            },
            {
                "name": "pagenumber",
                "wire": "pagenumber"
            },
            {
                "name": "pagesize",
                "wire": "pagesize"
            },
            {
                "name": "searchfilter",
                "wire": "searchfilter"
            },
            {
                "name": "seed",
                "wire": "seed"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "TotalResults": 1,
            "TotalPages": 1,
            "CurrentPage": 1,
            "Seed": "x",
            "Items": [
                {
                    "Id": "x",
                    "AccoTypeId": "x",
                    "Shortname": "x",
                    "AccoDetail": {
                        "Name": "x",
                        "Language": "x"
                    },
                    "ContactInfos": {
                        "Address": "x",
                        "City": "x",
                        "ZipCode": "x",
                        "Email": "x",
                        "Phonenumber": "x",
                        "Url": "x"
                    },
                    "LocationInfo": {
                        "RegionInfo": {
                            "Id": "x",
                            "Name": {}
                        }
                    },
                    "GpsInfo": [
                        {
                            "Latitude": 1,
                            "Longitude": 1,
                            "Altitude": 1
                        }
                    ],
                    "Features": [
                        {
                            "Id": "x",
                            "Name": "x"
                        }
                    ],
                    "Active": true,
                    "LastChange": "2026-01-01T00:00:00Z"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map