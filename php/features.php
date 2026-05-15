<?php
declare(strict_types=1);

// Accommodation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AccommodationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AccommodationBaseFeature();
            case "test":
                return new AccommodationTestFeature();
            default:
                return new AccommodationBaseFeature();
        }
    }
}
