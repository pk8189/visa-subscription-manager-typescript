/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
} from "@public/visa_subscription_manager/core";
import { V1Client } from "@public/visa_subscription_manager/resources/cofds-web/v1";

export class CofdsWebClient extends CoreResourceClient {
  // register resources (keep comment for code generation)
  v1: V1Client;

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
    this.v1 = new V1Client(this._client);
  }

  // register api methods (keep comment for code generation)
}
