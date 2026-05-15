<?php
declare(strict_types=1);

// Accommodation SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

AccommodationUtility::setRegistrar(function (AccommodationUtility $u): void {
    $u->clean = [AccommodationClean::class, 'call'];
    $u->done = [AccommodationDone::class, 'call'];
    $u->make_error = [AccommodationMakeError::class, 'call'];
    $u->feature_add = [AccommodationFeatureAdd::class, 'call'];
    $u->feature_hook = [AccommodationFeatureHook::class, 'call'];
    $u->feature_init = [AccommodationFeatureInit::class, 'call'];
    $u->fetcher = [AccommodationFetcher::class, 'call'];
    $u->make_fetch_def = [AccommodationMakeFetchDef::class, 'call'];
    $u->make_context = [AccommodationMakeContext::class, 'call'];
    $u->make_options = [AccommodationMakeOptions::class, 'call'];
    $u->make_request = [AccommodationMakeRequest::class, 'call'];
    $u->make_response = [AccommodationMakeResponse::class, 'call'];
    $u->make_result = [AccommodationMakeResult::class, 'call'];
    $u->make_point = [AccommodationMakePoint::class, 'call'];
    $u->make_spec = [AccommodationMakeSpec::class, 'call'];
    $u->make_url = [AccommodationMakeUrl::class, 'call'];
    $u->param = [AccommodationParam::class, 'call'];
    $u->prepare_auth = [AccommodationPrepareAuth::class, 'call'];
    $u->prepare_body = [AccommodationPrepareBody::class, 'call'];
    $u->prepare_headers = [AccommodationPrepareHeaders::class, 'call'];
    $u->prepare_method = [AccommodationPrepareMethod::class, 'call'];
    $u->prepare_params = [AccommodationPrepareParams::class, 'call'];
    $u->prepare_path = [AccommodationPreparePath::class, 'call'];
    $u->prepare_query = [AccommodationPrepareQuery::class, 'call'];
    $u->result_basic = [AccommodationResultBasic::class, 'call'];
    $u->result_body = [AccommodationResultBody::class, 'call'];
    $u->result_headers = [AccommodationResultHeaders::class, 'call'];
    $u->transform_request = [AccommodationTransformRequest::class, 'call'];
    $u->transform_response = [AccommodationTransformResponse::class, 'call'];
});
