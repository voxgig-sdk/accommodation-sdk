# Typed models for the Accommodation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Accommodation:
    acco_detail: Optional[dict] = None
    acco_type_id: Optional[str] = None
    active: Optional[bool] = None
    contact_info: Optional[dict] = None
    feature: Optional[list] = None
    gps_info: Optional[list] = None
    id: Optional[str] = None
    last_change: Optional[str] = None
    location_info: Optional[dict] = None
    shortname: Optional[str] = None


@dataclass
class AccommodationListMatch:
    acco_detail: Optional[dict] = None
    acco_type_id: Optional[str] = None
    active: Optional[bool] = None
    contact_info: Optional[dict] = None
    feature: Optional[list] = None
    gps_info: Optional[list] = None
    id: Optional[str] = None
    last_change: Optional[str] = None
    location_info: Optional[dict] = None
    shortname: Optional[str] = None

