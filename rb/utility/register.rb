# Accommodation SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AccommodationUtility.registrar = ->(u) {
  u.clean = AccommodationUtilities::Clean
  u.done = AccommodationUtilities::Done
  u.make_error = AccommodationUtilities::MakeError
  u.feature_add = AccommodationUtilities::FeatureAdd
  u.feature_hook = AccommodationUtilities::FeatureHook
  u.feature_init = AccommodationUtilities::FeatureInit
  u.fetcher = AccommodationUtilities::Fetcher
  u.make_fetch_def = AccommodationUtilities::MakeFetchDef
  u.make_context = AccommodationUtilities::MakeContext
  u.make_options = AccommodationUtilities::MakeOptions
  u.make_request = AccommodationUtilities::MakeRequest
  u.make_response = AccommodationUtilities::MakeResponse
  u.make_result = AccommodationUtilities::MakeResult
  u.make_point = AccommodationUtilities::MakePoint
  u.make_spec = AccommodationUtilities::MakeSpec
  u.make_url = AccommodationUtilities::MakeUrl
  u.param = AccommodationUtilities::Param
  u.prepare_auth = AccommodationUtilities::PrepareAuth
  u.prepare_body = AccommodationUtilities::PrepareBody
  u.prepare_headers = AccommodationUtilities::PrepareHeaders
  u.prepare_method = AccommodationUtilities::PrepareMethod
  u.prepare_params = AccommodationUtilities::PrepareParams
  u.prepare_path = AccommodationUtilities::PreparePath
  u.prepare_query = AccommodationUtilities::PrepareQuery
  u.result_basic = AccommodationUtilities::ResultBasic
  u.result_body = AccommodationUtilities::ResultBody
  u.result_headers = AccommodationUtilities::ResultHeaders
  u.transform_request = AccommodationUtilities::TransformRequest
  u.transform_response = AccommodationUtilities::TransformResponse
}
