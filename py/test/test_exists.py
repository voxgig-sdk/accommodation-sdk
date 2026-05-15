# ProjectName SDK exists test

import pytest
from accommodation_sdk import AccommodationSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AccommodationSDK.test(None, None)
        assert testsdk is not None
