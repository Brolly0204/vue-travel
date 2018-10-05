import { get } from './config'

export const getCityList = (params) => {
  return get('/api/city.json', params)
}
