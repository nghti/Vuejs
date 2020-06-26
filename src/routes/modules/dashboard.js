const DashboardGroup = {
  template: `<router-view/>`,
};

export default {
  path: '',
  component: DashboardGroup,
  children: [
    {
      path: '',
      name: 'dashboard',
      component: () => import('../../pages/dashboard/Dashboard'),
    },
    {
      path: '/motel',
      name: 'motel',
      component: () => import('../../pages/dashboard/Motel'),
    },
    {
      path: '/room',
      name: 'room',
      component: () => import('../../pages/dashboard/Room'),
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../../pages/dashboard/Service'),
    },
  ],
  meta: {
    public: false,
  },
};
