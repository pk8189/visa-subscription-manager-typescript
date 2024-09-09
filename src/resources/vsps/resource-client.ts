/**
 * File Generated by Sideko (sideko.dev)
 */
import {
  CoreResourceClient,
  CoreClient,
} from "@public/visa_subscription_manager/core";
import { AddClient } from "@public/visa_subscription_manager/resources/vsps/add";
import { CancelClient } from "@public/visa_subscription_manager/resources/vsps/cancel";
import { SearchClient } from "@public/visa_subscription_manager/resources/vsps/search";

export class VspsClient extends CoreResourceClient {
  // register resources (keep comment for code generation)
  add: AddClient;
  cancel: CancelClient;
  search: SearchClient;

  constructor(client: CoreClient) {
    super(client);

    // init resources (keep comment for code generation)
    this.add = new AddClient(this._client);
    this.cancel = new CancelClient(this._client);
    this.search = new SearchClient(this._client);
  }

  // register api methods (keep comment for code generation)
}