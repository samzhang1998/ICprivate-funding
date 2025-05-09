import sendRequest from "@/server/sendRequest";

export function brokers(params) {
    return sendRequest({
        url: "/api/brokers/",
        method: "get",
        params: params,
    });
}
export function broker(params) {
    return sendRequest({
        url: `/api/brokers/${params}`,
        method: "get",
    });
}
export function addBrokers(params) {
    return sendRequest({
        url: "/api/brokers/",
        method: "post",
        data: params,
    });
}

export function branches(params) {
    return sendRequest({
        url: "/api/brokers/branches/",
        method: "get",
        params: params,
    });
}
export function branch(params) {
    return sendRequest({
        url: `/api/brokers/branches/${params}`,
        method: "get",
    });
}

export function bdms(params) {
    return sendRequest({
        url: "/api/brokers/bdms/",
        method: "get",
        params: params,
    });
}
export function bdm(params) {
    return sendRequest({
        url: `/api/brokers/bdms/${params}`,
        method: "get",
    });
}

export const brokerApi = {
    brokers,
    broker,
    addBrokers,
    branches,
    branch,
    bdms,
    bdm
};