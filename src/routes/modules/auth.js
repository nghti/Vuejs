export default {
  path: '/login',
  name: 'auth.login',
  component: () => import('../../views/auth/Login_ex1'),
  meta: {
    public: true,
    onlyWhenLoggedOut: true
  }
}
