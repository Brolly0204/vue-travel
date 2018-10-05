import * as types from './action-type'

export default {
  [types.CHANGE_CITY](state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
