<?php
declare(strict_types=1);

// Accommodation SDK utility: feature_add

class AccommodationFeatureAdd
{
    public static function call(AccommodationContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
