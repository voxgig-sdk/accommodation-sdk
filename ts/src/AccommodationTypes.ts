// Typed models for the Accommodation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Accommodation {
  acco_detail?: Record<string, any>
  acco_type_id?: string
  active?: boolean
  contact_info?: Record<string, any>
  feature?: any[]
  gps_info?: any[]
  id?: string
  last_change?: string
  location_info?: Record<string, any>
  shortname?: string
}

export interface AccommodationListMatch {
  acco_detail?: Record<string, any>
  acco_type_id?: string
  active?: boolean
  contact_info?: Record<string, any>
  feature?: any[]
  gps_info?: any[]
  id?: string
  last_change?: string
  location_info?: Record<string, any>
  shortname?: string
}

