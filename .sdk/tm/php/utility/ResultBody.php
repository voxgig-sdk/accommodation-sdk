<?php
declare(strict_types=1);

// Accommodation SDK utility: result_body

class AccommodationResultBody
{
    public static function call(AccommodationContext $ctx): ?AccommodationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
