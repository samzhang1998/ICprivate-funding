import { userApi } from "./user/index";
import { brokerApi } from "./user/broker";
import { borrowerApi } from "./user/borrowers";

export const api = {
  ...userApi,
  ...brokerApi,
  ...borrowerApi,
};
