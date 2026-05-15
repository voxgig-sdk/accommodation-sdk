<?php
declare(strict_types=1);

// Accommodation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AccommodationMakeContext
{
    public static function call(array $ctxmap, ?AccommodationContext $basectx): AccommodationContext
    {
        return new AccommodationContext($ctxmap, $basectx);
    }
}
