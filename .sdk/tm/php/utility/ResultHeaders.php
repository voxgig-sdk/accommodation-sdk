<?php
declare(strict_types=1);

// Accommodation SDK utility: result_headers

class AccommodationResultHeaders
{
    public static function call(AccommodationContext $ctx): ?AccommodationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
