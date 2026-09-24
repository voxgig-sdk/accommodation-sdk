<?php
declare(strict_types=1);

// Typed models for the Accommodation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Accommodation entity data model. */
class Accommodation
{
    public ?array $AccoDetail = null;
    public ?string $AccoTypeId = null;
    public ?bool $Active = null;
    public ?array $ContactInfos = null;
    public ?array $Features = null;
    public ?array $GpsInfo = null;
    public ?string $Id = null;
    public ?string $LastChange = null;
    public ?array $LocationInfo = null;
    public ?string $Shortname = null;
}

/** Request payload for Accommodation#list. */
class AccommodationListMatch
{
    public ?bool $active = null;
    public ?string $field = null;
    public ?string $langfilter = null;
    public ?string $locfilter = null;
    public ?bool $odhactive = null;
    public ?int $pagenumber = null;
    public ?int $pagesize = null;
    public ?string $searchfilter = null;
    public ?string $seed = null;
}

