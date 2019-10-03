const AssessmentList = () => import('../../views/assessment/List')
const AssessmentDetail = () => import('../../views/assessment/Detail')

const Assessment = {
  template: `<router-view/>`
}

export default {
  path: 'assessments',
  component: Assessment,
  children: [
    {
      path: '',
      component: AssessmentList,
      name: 'assessments.list',
      meta: {
        title: 'Assessments',
        breadcrumb: [
          {
            link: 'dashboard',
            name: 'ホーム'
          },
          {
            link: 'assessments.list',
            name: '査定管理'
          }
        ]
      }
    },
    {
      path: ':id',
      component: AssessmentDetail,
      name: 'assessments.detail',
      meta: {
        title: 'Assessments',
        breadcrumb: [
          {
            link: 'dashboard',
            name: 'ホーム'
          },
          {
            link: 'assessments.detail',
            name: '査定管理'
          }
        ]
      }
    },
  ],
  meta: {
    public: false,
  }
}
