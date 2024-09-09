/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
  RequestOptions,
  ApiPromise,
} from "@public/visa_subscription_manager/core";
import * as requests from "@public/visa_subscription_manager/resources/vsps/add/merchant/request-types";
import * as types from "@public/visa_subscription_manager/types";

export class MerchantClient extends CoreResourceClient {
  // register resources (keep comment for code generation)

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
  }

  // register api methods (keep comment for code generation)

  /**
   * Add one or more merchant level stop instructions
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.MerchantStopApiRsp> {
    // send request (keep comment for code generation)
    return this._client.makeRequest({
      method: "post",
      path: "/vsps/add/merchant",
      headers: { clientId: request.clientId },
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
