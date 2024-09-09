
# Visa Subscription Manager Typescript SDK

## Overview


## Initilization

```typescript
import Client from "@public/visa_subscription_manager"

new Client();
```


### Card-on-File Merchant Aggregation
> The API will return data layer aggregated at cleansed merchant name level.

```typescript
import * as types from "@public/visa_subscription_manager/types"

const response = await client.cofdsWeb.v1.datainfo.create({
  data: {
    requestData: {
      group: types.MRequestDataGroupEnum.Standard,
      pANs: ["4072208010000000"],
    },
    requestHeader: {
      messageDateTime: "2018-09-19 06:01:00.601",
      requestMessageId: "6da60e1b8b024532a2e0eacb1af5858132a2e0eacb1af58581",
    },
  },
});
```

---

### Card-on-File Raw Merchant Details
> The API will return data layer aggregated at raw merchant name level.

```typescript
const response = await client.cofdsWeb.v1.datainfo.merchants.create({
  mrchRef: "string",
  data: {
    requestData: { pAN: "4072202010000000" },
    requestHeader: {
      messageDateTime: "2023-08-07 09:29:06.140",
      requestMessageId: "6da6b8b024532a2e0eacb1af58581",
    },
  },
});
```

---

### Add Merchant
> Add one or more merchant level stop instructions

```typescript
import * as types from "@public/visa_subscription_manager/types"

const response = await client.vsps.add.merchant.create({
  clientId: "string",
  data: {
    additional: {
      additionalNotes: "Creating 5 Merchant level stops",
      paymentFrequency: types.AdditionalPaymentFrequencyEnum.OneOff,
    },
    duration: 13,
    merchantCategoryCode: "0799",
    merchantIdentifiers: {
      cardAcceptorIds: ["012569990001111"],
      grouped: [
        {
          cardAcceptorId: "12569990002222",
          merchantName: "FLIXNET",
          paymentFacilitator: {
            paymentFacilitatorId: "PAIPAL",
            subMerchantId: "001010101010102",
          },
        },
      ],
      merchantNames: ["FLIXNET", "FLIXNET UK"],
      paymentFacilitators: [
        { paymentFacilitatorId: "PAIPAL", subMerchantId: "001010101010102" },
        { paymentFacilitatorId: "PAIPAL", subMerchantId: "001010101010104" },
      ],
    },
    oneTimeStop: false,
    pan: "4111111111111111",
    recurringAndInstallmentIndicator: false,
    startDate: "2021-02-01",
    transactionAmount: { exactAmount: 100, maxAmount: 500, minAmount: 50.5 },
  },
});
```

---

### Cancel
> Cancel multiple stop instructions

```typescript
const response = await client.vsps.cancel.create({
  clientId: "string",
  data: { cancelStopInstructions: ["1234568", "1023000"] },
});
```

---

### Search
> Search for stop instructions by PAN

```typescript
const response = await client.vsps.search.create({
  clientId: "string",
  data: { includeInactive: false, pan: "4111111111111111" },
});
```


