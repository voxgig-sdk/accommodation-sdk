# Accommodation SDK feature factory

from accommodation_sdk.feature.base_feature import AccommodationBaseFeature
from accommodation_sdk.feature.ratelimit_feature import AccommodationRatelimitFeature
from accommodation_sdk.feature.retry_feature import AccommodationRetryFeature
from accommodation_sdk.feature.test_feature import AccommodationTestFeature
from accommodation_sdk.feature.timeout_feature import AccommodationTimeoutFeature


_FEATURES = {
    "base": lambda: AccommodationBaseFeature(),
    "ratelimit": lambda: AccommodationRatelimitFeature(),
    "retry": lambda: AccommodationRetryFeature(),
    "test": lambda: AccommodationTestFeature(),
    "timeout": lambda: AccommodationTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
