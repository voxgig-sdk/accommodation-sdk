<?php
declare(strict_types=1);

// Accommodation SDK utility: prepare_body

class AccommodationPrepareBody
{
    public static function call(AccommodationContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
