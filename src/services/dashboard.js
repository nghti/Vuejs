import Client from '../utils/client'

class DashboardService {
  getUsers () {
    return Client().get(`users?page=1`)
  }
}

export default new DashboardService()
