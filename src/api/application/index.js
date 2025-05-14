import sendRequest from "@/server/sendRequest";

export function applications(params) {
    return sendRequest({
        url: "/api/applications/applications/enhanced_list/",
        method: "get",
        params: params,
    });
}
export function addApplications(params) {
    return sendRequest({
        url: "/api/applications/applications/",
        method: "post",
        data: params,
    });
}
export function application(params) {
    return sendRequest({
        url: `/api/applications/applications/${params}`,
        method: "get",
    });
}

export const applicationApi = {
    applications,
    application,
    addApplications
}