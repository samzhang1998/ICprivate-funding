import sendRequest from "@/server/sendRequest";

export function applicationStatus(params) {
  return sendRequest({
    url: "/api/reports/application-status/",
    method: "get",
    params,
  });
}

export function applicationVolume(params) {
  return sendRequest({
    url: "/api/reports/application-volume/",
    method: "get",
    params,
  });
}

export function repaymentCompliance(params) {
  return sendRequest({
    url: "/api/reports/repayment-compliance/",
    method: "get",
    params,
  });
}

export const dashboardApi = {
  applicationStatus,
  applicationVolume,
  repaymentCompliance,
};
