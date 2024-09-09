/**
 * File Generated by Sideko (sideko.dev)
 */
import Client from "@public/visa_subscription_manager";

// test client mehtods (keep comment for code generation)

describe("tests client.vsps.search.create", () => {
  test.concurrent("200 generated_success_search_s1", async () => {
    // Generated success test for search_s1 body example from OpenAPI
    const client = new Client({
      baseUrl:
        "https://api.sideko.dev/v1/mock/public/visa-subscription-manager/0.1.0",
    });
    const response = await client.vsps.search.create({
      clientId: "string",
      data: { includeInactive: false, pan: "4111111111111111" },
    });
    console.log(response);
  });
  test.concurrent("200 generated_success_search_s2", async () => {
    // Generated success test for search_s2 body example from OpenAPI
    const client = new Client({
      baseUrl:
        "https://api.sideko.dev/v1/mock/public/visa-subscription-manager/0.1.0",
    });
    const response = await client.vsps.search.create({
      clientId: "string",
      data: { includeInactive: true, pan: "4111111111111145" },
    });
    console.log(response);
  });
  test.concurrent("200 generated_success_search_s3", async () => {
    // Generated success test for search_s3 body example from OpenAPI
    const client = new Client({
      baseUrl:
        "https://api.sideko.dev/v1/mock/public/visa-subscription-manager/0.1.0",
    });
    const response = await client.vsps.search.create({
      clientId: "string",
      data: { includeInactive: true, pan: "4111111111111152" },
    });
    console.log(response);
  });
  test.concurrent("200 generated_success_search_s4", async () => {
    // Generated success test for search_s4 body example from OpenAPI
    const client = new Client({
      baseUrl:
        "https://api.sideko.dev/v1/mock/public/visa-subscription-manager/0.1.0",
    });
    const response = await client.vsps.search.create({
      clientId: "string",
      data: { includeInactive: true, pan: "4111111111111111" },
    });
    console.log(response);
  });
  test.concurrent("200 generated_success_search_s5", async () => {
    // Generated success test for search_s5 body example from OpenAPI
    const client = new Client({
      baseUrl:
        "https://api.sideko.dev/v1/mock/public/visa-subscription-manager/0.1.0",
    });
    const response = await client.vsps.search.create({
      clientId: "string",
      data: { includeInactive: false, pan: "4072208010000000" },
    });
    console.log(response);
  });
});