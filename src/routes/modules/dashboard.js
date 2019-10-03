import DashboardHome from '../../views/dashboard/Dashboard'

const DashboardGroup = {
  template: `<router-view/>`
}

export default {
  path: 'dashboard',
  component: DashboardGroup,
  children: [
    {
      path: '',
      name: 'dashboard',
      component: DashboardHome,
      meta: {
        title: 'Dashboard Title',
        breadcrumb: [
          {
            link: 'dashboard',
            name: 'ホーム'
          }
        ]
      }
    },
  ],
  meta: {
    public: false,
  }
}
