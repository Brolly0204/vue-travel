import { get } from './config'

export const getDetailInfo = (params) => {
  return get('/api/detail.json', params)
}
