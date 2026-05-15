# Accommodation SDK utility: make_context
require_relative '../core/context'
module AccommodationUtilities
  MakeContext = ->(ctxmap, basectx) {
    AccommodationContext.new(ctxmap, basectx)
  }
end
