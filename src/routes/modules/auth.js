export default {
  path: '/login',
  name: 'auth.login',
  component: () => import('../../pages/auth/Login'),
  meta: {
    public: true,
    onlyWhenLoggedOut: true
  }
}
