import DashboardService from '../../../services/dashboard'
import { error } from '../../../utils/toastr'

export default {
  async getUsers ({ commit }) {
    try {
      const { data } = await DashboardService.getUsers()
      commit('SET_USERS', data)
    } catch (e) {
      error(window.trans('error'))
    }
  }
}
