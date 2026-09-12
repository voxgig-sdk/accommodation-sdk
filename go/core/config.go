package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Accommodation",
			"slug": "accommodation",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"name": "AccoDetail",
						"short": "Detailed information about the accommodation",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "AccoTypeId",
						"short": "Type identifier (e.g., hotel, guesthouse)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "Active",
						"short": "Whether the accommodation is active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ContactInfos",
						"short": "Contact information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "Features",
						"short": "List of features and amenities",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "GpsInfo",
						"short": "GPS coordinates",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "Id",
						"short": "Unique identifier for the accommodation",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "LastChange",
						"short": "Last modification timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "LocationInfo",
						"short": "Geographic location information",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "Shortname",
						"short": "Short name of the accommodation",
						"type": "`$STRING`",
					},
				},
				"name": "accommodation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "langfilter",
											"orig": "langfilter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "locfilter",
											"orig": "locfilter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "odhactive",
											"orig": "odhactive",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "pagenumber",
											"orig": "pagenumber",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "pagesize",
											"orig": "pagesize",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "searchfilter",
											"orig": "searchfilter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "seed",
											"orig": "seed",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/Accommodation",
								"segments": []any{
									map[string]any{
										"lit": "Accommodation",
									},
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
									"res": "`body.Items`",
								},
								"parts": []any{
									"Accommodation",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
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
