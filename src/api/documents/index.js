import sendRequest from '@/server/sendRequest';

export function getDocuments() {
    return sendRequest({
        url: '/api/documents/documents/',
        method: 'post',
    })
}

export const documentApi = {
    getDocuments,
}