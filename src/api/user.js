import request from '@/utils/request'

export function login(loginParams) {
  return request({
    url: 'http://localhost:8501/shop/user/login/321/123',
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
