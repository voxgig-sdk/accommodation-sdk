# Accommodation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AccommodationFeatures
  def self.make_feature(name)
    case name
    when "base"
      AccommodationBaseFeature.new
    when "ratelimit"
      AccommodationRatelimitFeature.new
    when "retry"
      AccommodationRetryFeature.new
    when "test"
      AccommodationTestFeature.new
    when "timeout"
      AccommodationTimeoutFeature.new
    else
      AccommodationBaseFeature.new
    end
  end
end
