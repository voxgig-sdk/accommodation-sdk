package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Accommodation",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://tourism.opendatahub.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"accommodation": map[string]any{},
			},
		},
		"entity": map[string]any{
			"accommodation": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "acco_detail",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "acco_type_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "active",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "contact_info",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "feature",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "gps_info",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "last_change",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "location_info",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "shortname",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "accommodation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "active",
											"orig": "active",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "field",
											"orig": "field",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "langfilter",
											"orig": "langfilter",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "locfilter",
											"orig": "locfilter",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "odhactive",
											"orig": "odhactive",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"example": 1,
											"kind": "query",
											"name": "pagenumber",
											"orig": "pagenumber",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": 10,
											"kind": "query",
											"name": "pagesize",
											"orig": "pagesize",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "searchfilter",
											"orig": "searchfilter",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "seed",
											"orig": "seed",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"method": "GET",
								"orig": "/Accommodation",
								"parts": []any{
									"Accommodation",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
