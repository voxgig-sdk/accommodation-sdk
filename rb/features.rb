# Accommodation SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AccommodationFeatures
  def self.make_feature(name)
    case name
    when "base"
      AccommodationBaseFeature.new
    when "test"
      AccommodationTestFeature.new
    else
      AccommodationBaseFeature.new
    end
  end
end
