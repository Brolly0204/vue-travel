import { get } from './config'

export const getHomeData = () => {
  return get('/api/home.json')
}
