# frozen_string_literal: true

# Typed models for the Accommodation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Accommodation entity data model.
#
# @!attribute [rw] acco_detail
#   @return [Hash, nil]
#
# @!attribute [rw] acco_type_id
#   @return [String, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] contact_info
#   @return [Hash, nil]
#
# @!attribute [rw] feature
#   @return [Array, nil]
#
# @!attribute [rw] gps_info
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_change
#   @return [String, nil]
#
# @!attribute [rw] location_info
#   @return [Hash, nil]
#
# @!attribute [rw] shortname
#   @return [String, nil]
Accommodation = Struct.new(
  :acco_detail,
  :acco_type_id,
  :active,
  :contact_info,
  :feature,
  :gps_info,
  :id,
  :last_change,
  :location_info,
  :shortname,
  keyword_init: true
)

# Match filter for Accommodation#list (any subset of Accommodation fields).
#
# @!attribute [rw] acco_detail
#   @return [Hash, nil]
#
# @!attribute [rw] acco_type_id
#   @return [String, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] contact_info
#   @return [Hash, nil]
#
# @!attribute [rw] feature
#   @return [Array, nil]
#
# @!attribute [rw] gps_info
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] last_change
#   @return [String, nil]
#
# @!attribute [rw] location_info
#   @return [Hash, nil]
#
# @!attribute [rw] shortname
#   @return [String, nil]
AccommodationListMatch = Struct.new(
  :acco_detail,
  :acco_type_id,
  :active,
  :contact_info,
  :feature,
  :gps_info,
  :id,
  :last_change,
  :location_info,
  :shortname,
  keyword_init: true
)

