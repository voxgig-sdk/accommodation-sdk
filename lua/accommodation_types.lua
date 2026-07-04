-- Typed models for the Accommodation SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Accommodation
---@field acco_detail? table
---@field acco_type_id? string
---@field active? boolean
---@field contact_info? table
---@field feature? table
---@field gps_info? table
---@field id? string
---@field last_change? string
---@field location_info? table
---@field shortname? string

---@class AccommodationListMatch

local M = {}

return M
