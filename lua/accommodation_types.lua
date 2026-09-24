-- Typed models for the Accommodation SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Accommodation
---@field AccoDetail? table
---@field AccoTypeId? string
---@field Active? boolean
---@field ContactInfos? table
---@field Features? table
---@field GpsInfo? table
---@field Id? string
---@field LastChange? string
---@field LocationInfo? table
---@field Shortname? string

---@class AccommodationListMatch
---@field active? boolean
---@field field? string
---@field langfilter? string
---@field locfilter? string
---@field odhactive? boolean
---@field pagenumber? number
---@field pagesize? number
---@field searchfilter? string
---@field seed? string

local M = {}

return M
