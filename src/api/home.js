import { get } from './config'

export const getHomeData = (params) => {
  return get('/api/home.json', params)
}
