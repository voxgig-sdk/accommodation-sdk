# Accommodation SDK utility: feature_add
module AccommodationUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
