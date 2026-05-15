package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccommodationEntityFunc func(client *AccommodationSDK, entopts map[string]any) AccommodationEntity

