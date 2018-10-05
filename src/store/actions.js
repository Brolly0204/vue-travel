import * as types from './action-type'

export default {
  changeCity({ commit }, city) {
    commit(types.CHANGE_CITY, city)
  }
}
