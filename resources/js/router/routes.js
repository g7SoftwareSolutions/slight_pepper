function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue'), },
  { path: '/map', name: 'map', component: page('map.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('create_vendor_form.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/user_animals', name: 'user_animals', component: page('user_animals.vue') },
  { path: '/create_animal_form', name: 'create_animal_form', component: page('create_animal_form.vue') },
  { path: '/create_vendor_form', name: 'create_vendor_form', component: page('create_vendor_form.vue') },
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
