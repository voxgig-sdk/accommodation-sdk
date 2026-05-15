# Accommodation SDK utility: make_context

from core.context import AccommodationContext


def make_context_util(ctxmap, basectx):
    return AccommodationContext(ctxmap, basectx)
