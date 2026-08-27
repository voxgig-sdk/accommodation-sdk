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
# @!attribute [rw] AccoDetail
#   @return [Hash, nil]
#
# @!attribute [rw] AccoTypeId
#   @return [String, nil]
#
# @!attribute [rw] Active
#   @return [Boolean, nil]
#
# @!attribute [rw] ContactInfos
#   @return [Hash, nil]
#
# @!attribute [rw] Features
#   @return [Array, nil]
#
# @!attribute [rw] GpsInfo
#   @return [Array, nil]
#
# @!attribute [rw] Id
#   @return [String, nil]
#
# @!attribute [rw] LastChange
#   @return [String, nil]
#
# @!attribute [rw] LocationInfo
#   @return [Hash, nil]
#
# @!attribute [rw] Shortname
#   @return [String, nil]
Accommodation = Struct.new(
  :AccoDetail,
  :AccoTypeId,
  :Active,
  :ContactInfos,
  :Features,
  :GpsInfo,
  :Id,
  :LastChange,
  :LocationInfo,
  :Shortname,
  keyword_init: true
)

# Request payload for Accommodation#list.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] field
#   @return [String, nil]
#
# @!attribute [rw] langfilter
#   @return [String, nil]
#
# @!attribute [rw] locfilter
#   @return [String, nil]
#
# @!attribute [rw] odhactive
#   @return [Boolean, nil]
#
# @!attribute [rw] pagenumber
#   @return [Integer, nil]
#
# @!attribute [rw] pagesize
#   @return [Integer, nil]
#
# @!attribute [rw] searchfilter
#   @return [String, nil]
#
# @!attribute [rw] seed
#   @return [String, nil]
AccommodationListMatch = Struct.new(
  :active,
  :field,
  :langfilter,
  :locfilter,
  :odhactive,
  :pagenumber,
  :pagesize,
  :searchfilter,
  :seed,
  keyword_init: true
)

