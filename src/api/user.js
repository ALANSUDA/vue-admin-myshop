
import request from '@/utils/request'
import qs from 'qs'
export function login(loginParams) {
  /* return request({
    url: '/user/login/' + loginParams.username + '/' + loginParams.password,
    method: 'get'
  }) */
  const data = qs.stringify(loginParams)
  return request({
    url: '/user/login',
    method: 'post',
    data
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

/*
import axios from 'axios'
import qs from 'qs'

export function login(params) { return axios.post(`apis//user/login`, qs.stringify(params)) }*/

