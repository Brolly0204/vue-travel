import { get } from './config'

export const getCityList = () => {
  return get('/api/city.json')
}
