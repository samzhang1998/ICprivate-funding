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
        url: "/api/applications/create-with-cascade/",
        method: "post",
        data: params,
    });
}
export function application(params) {
    return sendRequest({
        url: `/api/applications/applications/${params}/`,
        method: "get",
    });
}
export function calculator(params) {
    return sendRequest({
        url: `/api/applications/manual-funding-calculator/`,
        method: "post",
        data: params,
    });
}
export function notes() {
    return sendRequest({
        url: `/api/documents/notes/`,
        method: "get",
    });
}
export function addNote(params) {
    return sendRequest({
        url: `/api/documents/notes/`,
        method: "post",
        data: params,
    });
}

export const applicationApi = {
    applications,
    application,
    addApplications,
    calculator,
    notes,
    addNote
}