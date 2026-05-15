<?php
declare(strict_types=1);

// Accommodation SDK base feature

class AccommodationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(AccommodationContext $ctx, array $options): void {}
    public function PostConstruct(AccommodationContext $ctx): void {}
    public function PostConstructEntity(AccommodationContext $ctx): void {}
    public function SetData(AccommodationContext $ctx): void {}
    public function GetData(AccommodationContext $ctx): void {}
    public function GetMatch(AccommodationContext $ctx): void {}
    public function SetMatch(AccommodationContext $ctx): void {}
    public function PrePoint(AccommodationContext $ctx): void {}
    public function PreSpec(AccommodationContext $ctx): void {}
    public function PreRequest(AccommodationContext $ctx): void {}
    public function PreResponse(AccommodationContext $ctx): void {}
    public function PreResult(AccommodationContext $ctx): void {}
    public function PreDone(AccommodationContext $ctx): void {}
    public function PreUnexpected(AccommodationContext $ctx): void {}
}
