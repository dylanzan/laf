///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";

/**
 * Create a new function
 */
export async function FunctionsControllerCreate(
  params: Definitions.CreateFunctionDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerCreate.Responses> {
  // /v1/apps/{appid}/functions
  return request(`/v1/apps/${params.appid}/functions`, {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Query function list of an app
 */
export async function FunctionsControllerFindAll(
  params: Paths.FunctionsControllerFindAll.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerFindAll.Responses> {
  // /v1/apps/{appid}/functions
  return request(`/v1/apps/${params.appid}/functions`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Get a function by its name
 */
export async function FunctionsControllerFindOne(
  params: Paths.FunctionsControllerFindOne.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerFindOne.Responses> {
  // /v1/apps/{appid}/functions/{name}
  return request(`/v1/apps/${params.appid}/functions/${params.name}`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Update a function
 */
export async function FunctionsControllerUpdate(
  params: Definitions.UpdateFunctionDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerUpdate.Responses> {
  // /v1/apps/{appid}/functions/{name}
  return request(`/v1/apps/${params.appid}/functions/${params.name}`, {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Delete a function
 */
export async function FunctionsControllerRemove(
  params: Paths.FunctionsControllerRemove.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerRemove.Responses> {
  // /v1/apps/{appid}/functions/{name}
  return request(`/v1/apps/${params.appid}/functions/${params.name}`, {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Compile a function
 */
export async function FunctionsControllerCompile(
  params: Paths.FunctionsControllerCompile.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.FunctionsControllerCompile.Responses> {
  // /v1/apps/{appid}/functions/{name}/compile
  return request(`/v1/apps/${params.appid}/functions/${params.name}/compile`, {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerCreate(
  params: Definitions.CreatePolicyDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerCreate.Responses> {
  // /v1/apps/{appid}/policies
  return request(`/v1/apps/${params.appid}/policies`, {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerFindAll(
  params: Paths.PoliciesControllerFindAll.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerFindAll.Responses> {
  // /v1/apps/{appid}/policies
  return request(`/v1/apps/${params.appid}/policies`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerFindOne(
  params: Paths.PoliciesControllerFindOne.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerFindOne.Responses> {
  // /v1/apps/{appid}/policies/{id}
  return request(`/v1/apps/${params.appid}/policies/${params.id}`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerUpdate(
  params: Definitions.UpdatePolicyDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerUpdate.Responses> {
  // /v1/apps/{appid}/policies/{id}
  return request(`/v1/apps/${params.appid}/policies/${params.id}`, {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function PoliciesControllerRemove(
  params: Paths.PoliciesControllerRemove.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.PoliciesControllerRemove.Responses> {
  // /v1/apps/{appid}/policies/{id}
  return request(`/v1/apps/${params.appid}/policies/${params.id}`, {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Create a new bucket
 */
export async function BucketsControllerCreate(
  params: Definitions.CreateBucketDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerCreate.Responses> {
  // /v1/apps/{appid}/buckets
  return request(`/v1/apps/${params.appid}/buckets`, {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Get bucket list of an app
 */
export async function BucketsControllerFindAll(
  params: Paths.BucketsControllerFindAll.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerFindAll.Responses> {
  // /v1/apps/{appid}/buckets
  return request(`/v1/apps/${params.appid}/buckets`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Get a bucket by name
 */
export async function BucketsControllerFindOne(
  params: Paths.BucketsControllerFindOne.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerFindOne.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  return request(`/v1/apps/${params.appid}/buckets/${params.name}`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Update a bucket
 */
export async function BucketsControllerUpdate(
  params: Definitions.UpdateBucketDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerUpdate.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  return request(`/v1/apps/${params.appid}/buckets/${params.name}`, {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Delete a bucket
 */
export async function BucketsControllerRemove(
  params: Paths.BucketsControllerRemove.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.BucketsControllerRemove.Responses> {
  // /v1/apps/{appid}/buckets/{name}
  return request(`/v1/apps/${params.appid}/buckets/${params.name}`, {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerCreate(
  params: Definitions.CreateWebsiteDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerCreate.Responses> {
  // /v1/apps/{appid}/websites
  return request(`/v1/apps/${params.appid}/websites`, {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerFindAll(
  params: Paths.WebsitesControllerFindAll.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerFindAll.Responses> {
  // /v1/apps/{appid}/websites
  return request(`/v1/apps/${params.appid}/websites`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerFindOne(
  params: Paths.WebsitesControllerFindOne.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerFindOne.Responses> {
  // /v1/apps/{appid}/websites/{id}
  return request(`/v1/apps/${params.appid}/websites/${params.id}`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerUpdate(
  params: Definitions.UpdateWebsiteDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerUpdate.Responses> {
  // /v1/apps/{appid}/websites/{id}
  return request(`/v1/apps/${params.appid}/websites/${params.id}`, {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * TODO - ⌛️
 */
export async function WebsitesControllerRemove(
  params: Paths.WebsitesControllerRemove.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.WebsitesControllerRemove.Responses> {
  // /v1/apps/{appid}/websites/{id}
  return request(`/v1/apps/${params.appid}/websites/${params.id}`, {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Create a new collection in database
 */
export async function CollectionsControllerCreate(
  params: Definitions.CreateCollectionDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerCreate.Responses> {
  // /v1/apps/{appid}/collections
  return request(`/v1/apps/${params.appid}/collections`, {
    method: "POST",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Get collection list of an application
 */
export async function CollectionsControllerFindAll(
  params: Paths.CollectionsControllerFindAll.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerFindAll.Responses> {
  // /v1/apps/{appid}/collections
  return request(`/v1/apps/${params.appid}/collections`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Get collection by name
 */
export async function CollectionsControllerFindOne(
  params: Paths.CollectionsControllerFindOne.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerFindOne.Responses> {
  // /v1/apps/{appid}/collections/{name}
  return request(`/v1/apps/${params.appid}/collections/${params.name}`, {
    method: "GET",
    params: params,
    ...(extra || {}),
  });
}

/**
 * Update a collection
 */
export async function CollectionsControllerUpdate(
  params: Definitions.UpdateCollectionDto | any,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerUpdate.Responses> {
  // /v1/apps/{appid}/collections/{name}
  return request(`/v1/apps/${params.appid}/collections/${params.name}`, {
    method: "PATCH",
    data: params,
    ...(extra || {}),
  });
}

/**
 * Delete a collection by its name
 */
export async function CollectionsControllerRemove(
  params: Paths.CollectionsControllerRemove.BodyParameters | any,
  extra?: { [key: string]: any },
): Promise<Paths.CollectionsControllerRemove.Responses> {
  // /v1/apps/{appid}/collections/{name}
  return request(`/v1/apps/${params.appid}/collections/${params.name}`, {
    method: "DELETE",
    data: params,
    ...(extra || {}),
  });
}