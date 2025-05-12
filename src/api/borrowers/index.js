import sendRequest from '@/server/sendRequest'

export function borrowers(params) {
  return sendRequest({
    url: '/api/borrowers/',
    method: 'get',
    params: params,
  })
}

export function addBorrowers(params) {
  return sendRequest({
    url: '/api/borrowers/',
    method: 'post',
    data: params,
  })
}

export function borrower(params) {
  return sendRequest({
    url: `/api/borrowers/${params}`,
    method: 'get',
  })
}

export function guarantors(params) {
  return sendRequest({
    url: '/api/borrowers/guarantors/',
    method: 'get',
    params: params,
  })
}
export function guarantor(params) {
  return sendRequest({
    url: `/api/borrowers/guarantors/${params}`,
    method: 'get',
  })
}

export const borrowerApi = {
  borrowers,
  borrower,
  guarantors,
  guarantor,
  addBorrowers,
}

