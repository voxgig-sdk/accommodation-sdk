package voxgigaccommodationsdk

import (
	"github.com/voxgig-sdk/accommodation-sdk/go/core"
	"github.com/voxgig-sdk/accommodation-sdk/go/entity"
	"github.com/voxgig-sdk/accommodation-sdk/go/feature"
	_ "github.com/voxgig-sdk/accommodation-sdk/go/utility"
)

// Type aliases preserve external API.
type AccommodationSDK = core.AccommodationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AccommodationEntity = core.AccommodationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AccommodationError = core.AccommodationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccommodationEntityFunc = func(client *core.AccommodationSDK, entopts map[string]any) core.AccommodationEntity {
		return entity.NewAccommodationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAccommodationSDK = core.NewAccommodationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
