import axios from 'axios'
import { commonParams, options } from './config'
import jsonp from 'common/js/jsonp'

export function getTopList() {
  const url = '/api/getTopList'

  const data = Object.assign({}, commonParams, {
    platForm: 'h5',
    needNewCode: 1,
    uin: 0,
    format: 'json',
    _: 1507449457648
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, commonParams, {
    topid,
    page: 'detail',
    type: 'top',
    tpl: 3,
    platform: 'h5',
    needNewCode: 1,
    _: 1507453905940
  })

  return jsonp(url, data, options)
}