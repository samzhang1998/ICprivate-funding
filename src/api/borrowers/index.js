import sendRequest from '@/server/sendRequest'

//http://3.25.83.191/api/borrowers/borrowers/
export function borrowers(params) {
  return sendRequest({
    url: '/api/borrowers/borrowers/',
    method: 'get',
    params: params,
  })
}

export function addBorrowers(params) {
  return sendRequest({
    url: '/api/borrowers/borrowers/',
    method: 'post',
    data: params,
  })
}
export function borrower(params) {
  return sendRequest({
    url: `/api/borrowers/borrowers/${params}`,
    method: 'get',
  })
}
//http://3.25.83.191/api/borrowers/borrowers/{id}/
export function deleteBorrower(params) {
  return sendRequest({
    url: `/api/borrowers/borrowers/${params}`,
    method: 'delete',
  })
}
export function putBorrower(id, data) {
  return sendRequest({
    url: `/api/borrowers/borrowers/${id}`,
    method: 'put',
    data,
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
  deleteBorrower,
  putBorrower,
}

