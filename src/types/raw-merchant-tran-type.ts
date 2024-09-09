/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "@public/visa_subscription_manager/types";

export type RawMerchantTranType = {
  lastCardAcceptorId?: string;
  lastTranAmt: string;
  lastTranAmtBillCurrency?: string;
  lastTranAmtUSD?: string;
  lastTranBillCurrency?: string;
  lastTranCurrency?: string;
  lastTranDateTime?: string;
  tranCount: number;
  tranType: types.RawMerchantTranTypeTranTypeEnum;
};