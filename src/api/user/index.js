import sendRequest from "@/server/sendRequest";

export const login = (params) =>
  sendRequest({
    url: "/api/users/auth/login/",
    method: "post",
    data: params,
  });

export const userApi = {
  login,
};
