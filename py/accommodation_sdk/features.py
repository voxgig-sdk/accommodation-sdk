# Accommodation SDK feature factory

from accommodation_sdk.feature.base_feature import AccommodationBaseFeature
from accommodation_sdk.feature.test_feature import AccommodationTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AccommodationBaseFeature(),
        "test": lambda: AccommodationTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
