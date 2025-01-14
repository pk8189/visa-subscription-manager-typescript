/**
 * File Generated by Sideko (sideko.dev)
 */

import * as types from "@public/visa_subscription_manager/types";

export type MerchantStopApiRqst = {
  additional?: types.Additional;
  duration: number;
  merchantCategoryCode?: string;
  merchantIdentifiers: types.MerchantIdentifiersWithGrouping;
  oneTimeStop?: boolean;
  pan: string;
  recurringAndInstallmentIndicator?: boolean;
  startDate: string;
  transactionAmount?: types.TransactionAmount;
};
