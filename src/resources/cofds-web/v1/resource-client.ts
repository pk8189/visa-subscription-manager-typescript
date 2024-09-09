/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
} from "@public/visa_subscription_manager/core";
import { DatainfoClient } from "@public/visa_subscription_manager/resources/cofds-web/v1/datainfo";

export class V1Client extends CoreResourceClient {
  // register resources (keep comment for code generation)
  datainfo: DatainfoClient;

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
    this.datainfo = new DatainfoClient(this._client);
  }

  // register api methods (keep comment for code generation)
}
