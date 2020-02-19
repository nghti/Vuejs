import Client from '../utils/client'

class DashboardService {
  getUsers () {
    return Client().get(`users`)
  }
}

export default new DashboardService()
