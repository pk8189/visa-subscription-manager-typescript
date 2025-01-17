/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "@public/visa_subscription_manager/core";
import * as requests from "@public/visa_subscription_manager/resources/cofds-web/v1/datainfo/merchants/request-types";
import * as types from "@public/visa_subscription_manager/types";
import qs from "qs";

export class MerchantsClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * The API will return data layer aggregated at raw merchant name level.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.RawMerchantDataResponse> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "post",
      path: "/cofds-web/v1/datainfo/merchants",
      query: [qs.stringify({ mrchRef: request.mrchRef })],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
