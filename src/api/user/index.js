import sendRequest from '@/server/sendRequest'

export function login(params) {
  return sendRequest({
    url: '/api/users/auth/login/',
    method: 'post',
    data: params,
  })
}

export function notifications(params) {
  return sendRequest({
    url: '/api/users/notifications/',
    method: 'get',
    params: params,
  })
}

export function users(params) {
  return sendRequest({
    url: '/api/users/users/',
    method: 'get',
    params: params,
  })
}
export function addUsers(params) {
  return sendRequest({
    url: '/api/users/users/',
    method: 'post',
    data: params,
  })
}

export function userInfo(params) {
  return sendRequest({
    url: `/api/users/users/${params}`,
    method: 'get',
  })
}
export function deleteUser(params) {
  return sendRequest({
    url: `/api/users/users/${params}`,
    method: 'delete',
  })
}
export function putUser(id, data) {
  return sendRequest({
    url: `/api/users/users/${id}`,
    method: 'put',
    data,
  })
}

export function logout(params) {
  return sendRequest({
    url: '/api/users/auth/login/',
    method: 'post',
    data: params,
  })
}

export const userApi = {
  login,
  notifications,
  users,
  addUsers,
  logout,
}

