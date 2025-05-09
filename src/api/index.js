import { userApi } from "./user";
import { brokerApi } from "./broker";
import { borrowerApi } from "./borrowers";

export const api = {
  ...userApi,
  ...brokerApi,
  ...borrowerApi,
};
