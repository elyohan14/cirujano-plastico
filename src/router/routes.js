
const routes = [
  {
    path: '/',
    component: () => import('layouts/StartLayout.vue')
  },
  {
    path: '/service_types',
    component: () => import('layouts/services/IndexServiceTypes.vue')
  },
  {
    path: '/services/:type',
    component: () => import('layouts/services/IndexServices.vue')
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue')
  },
  {
    path: '/menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
