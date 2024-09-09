/**
 * File Generated by Sideko (sideko.dev)
 */
import { CoreClient } from "@public/visa_subscription_manager/core";
import { Environment } from "@public/visa_subscription_manager/environment";
import { CofdsWebClient } from "@public/visa_subscription_manager/resources/cofds-web";
import { VspsClient } from "@public/visa_subscription_manager/resources/vsps";

export interface ClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
}

export class Client {
  protected _client: CoreClient;
  // register resources (keep comment for code generation)
  cofdsWeb: CofdsWebClient;
  vsps: VspsClient;

  constructor(opts?: ClientOptions) {
    const baseUrl = opts?.baseUrl
      ? opts?.baseUrl
      : opts?.environment ?? Environment.Default;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });

    // register auth methods (keep comment for code generation)

    // init resources (keep comment for code generation)
    this.cofdsWeb = new CofdsWebClient(this._client);
    this.vsps = new VspsClient(this._client);
  }

  // register api methods (keep comment for code generation)
}