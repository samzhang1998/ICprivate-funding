import { userApi } from "./user";
import { brokerApi } from "./broker";
import { borrowerApi } from "./borrowers";
import { dashboardApi } from "./dashboard";
import { applicationApi } from "./application";
import { guarantorApi } from "./guarantor";
import { productsApi } from "./products";
import { documentApi } from "./documents";

export const api = {
  ...userApi,
  ...brokerApi,
  ...borrowerApi,
  ...dashboardApi,
  ...applicationApi,
  ...guarantorApi,
  ...productsApi,
  ...documentApi,
};
