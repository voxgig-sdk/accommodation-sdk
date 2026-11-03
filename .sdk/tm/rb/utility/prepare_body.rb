# Accommodation SDK utility: prepare_body
require_relative 'media'
module AccommodationUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return AccommodationUtilities.raw_body(ctx.reqdata) if AccommodationUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
