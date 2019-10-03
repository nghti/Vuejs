const OrderDetail = () => import('../../views/order/Detail')

const Orders = {
  template: `<router-view/>`
}

export default {
  path: 'orders',
  component: Orders,
  children: [
    {
      path: '',
      component: OrderDetail,
      name: 'orders.list',
      meta: {
        title: 'Order List',
        breadcrumb: [
          {
            link: 'dashboard',
            name: 'ホーム'
          },
          {
            link: 'orders.list',
            name: '査定管理'
          }
        ]
      }
    },
    {
      path: ':id',
      component: OrderDetail,
      name: 'orders.detail',
      meta: {
        title: 'orders',
        breadcrumb: [
          {
            link: 'dashboard',
            name: 'ホーム'
          },
          {
            link: 'orders.detail',
            name: '購入管理'
          }
        ]
      }
    },
  ],
  meta: {
    public: false,
  }
}
