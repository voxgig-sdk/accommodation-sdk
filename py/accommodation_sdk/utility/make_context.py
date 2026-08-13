# Accommodation SDK utility: make_context

from accommodation_sdk.core.context import AccommodationContext


def make_context_util(ctxmap, basectx):
    return AccommodationContext(ctxmap, basectx)
