<?php
declare(strict_types=1);

// Typed models for the Accommodation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Accommodation entity data model. */
class Accommodation
{
    public ?array $acco_detail = null;
    public ?string $acco_type_id = null;
    public ?bool $active = null;
    public ?array $contact_info = null;
    public ?array $feature = null;
    public ?array $gps_info = null;
    public ?string $id = null;
    public ?string $last_change = null;
    public ?array $location_info = null;
    public ?string $shortname = null;
}

/** Request payload for Accommodation#list. */
class AccommodationListMatch
{
    public ?array $acco_detail = null;
    public ?string $acco_type_id = null;
    public ?bool $active = null;
    public ?array $contact_info = null;
    public ?array $feature = null;
    public ?array $gps_info = null;
    public ?string $id = null;
    public ?string $last_change = null;
    public ?array $location_info = null;
    public ?string $shortname = null;
}

