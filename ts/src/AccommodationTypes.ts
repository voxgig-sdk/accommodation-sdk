// Typed models for the Accommodation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Accommodation {
  AccoDetail?: Record<string, any>
  AccoTypeId?: string
  Active?: boolean
  ContactInfos?: Record<string, any>
  Features?: any[]
  GpsInfo?: any[]
  Id?: string
  LastChange?: string
  LocationInfo?: Record<string, any>
  Shortname?: string
}

export interface AccommodationListMatch {
  AccoDetail?: Record<string, any>
  AccoTypeId?: string
  Active?: boolean
  ContactInfos?: Record<string, any>
  Features?: any[]
  GpsInfo?: any[]
  Id?: string
  LastChange?: string
  LocationInfo?: Record<string, any>
  Shortname?: string
}

