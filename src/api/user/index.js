import sendRequest from "@/server/sendRequest";

export function login(params) {
  return sendRequest({
    url: "/api/users/auth/login/",
    method: "post",
    data: params,
  });
}

export function notifications(params) {
  return sendRequest({
    url: "/api/users/notifications/",
    method: "get",
    params: params,
  });
}

export function logout(params) {
  return sendRequest({
    url: "/api/users/auth/login/",
    method: "post",
    data: params,
  });
}

export const userApi = {
  login,
  notifications,
  logout,
};
