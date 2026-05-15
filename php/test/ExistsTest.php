<?php
declare(strict_types=1);

// Accommodation SDK exists test

require_once __DIR__ . '/../accommodation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AccommodationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
