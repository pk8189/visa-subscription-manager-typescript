/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "@public/visa_subscription_manager/types";

export type MerchantStopApiRsp = {
  responseCode: types.MerchantStopApiRspResponseCodeEnum;
  responseDescription: types.MerchantStopApiRspResponseDescriptionEnum;
  stopInstructions: types.ApiMerchantStopInstruction[];
};
