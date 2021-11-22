const Layout = () => import('@/layout/index.vue')

const routes = [
  // 刷新
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // 首页
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon',
          affix: true,
          Authority: true
        }
      }
    ]
  },
  // 数据管理
  {
    path: '/commodity',
    component: Layout,
    redirect: '/commodity/productlist',
    meta: {
      title: '商品',
      icon: 'icon',
      noCache: true,
      Authority: true
    },
    children: [
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import('@/views/commodity/productlist/index.vue'),
        meta: {
          title: '商品列表',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      },
      {
        path: 'addinggoods',
        name: 'addinggoods',
        component: () => import('@/views/commodity/addinggoods/index.vue'),
        meta: {
          title: '添加商品',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/commodity/categories/index.vue'),
        meta: {
          title: '商品分类',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      },
      {
        path: 'producttypes',
        name: 'producttypes',
        component: () => import('@/views/commodity/producttypes/index.vue'),
        meta: {
          title: '商品类型',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      }
    ]
  },
  // // 添加数据
  // {
  //   path: '/addingdata',
  //   component: Layout,
  //   redirect: '/addingdata/addshop',
  //   meta: {
  //     title: '添加数据',
  //     icon: 'icon',
  //     noCache: true,
  //     Authority: true
  //   },
  //   children: [
  //     {
  //       path: 'addshop',
  //       name: 'addshop',
  //       component: () => import('@/views/addingdata/addshop/index.vue'),
  //       meta: {
  //         title: '添加商铺',
  //         icon: 'icon',
  //         noCache: true,
  //         Authority: true
  //       }
  //     },
  //     {
  //       path: 'addinggoods',
  //       name: 'addinggoods',
  //       component: () => import('@/views/addingdata/addinggoods/index.vue'),
  //       meta: {
  //         title: '添加商品',
  //         icon: 'icon',
  //         noCache: true,
  //         Authority: true
  //       }
  //     }
  //   ]
  // },
  // 设置
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/adminsettings',
    meta: {
      title: '设置',
      icon: 'icon',
      noCache: true,
      Authority: true
    },
    children: [
      {
        path: 'adminsettings',
        name: 'adminsettings',
        component: () => import('@/views/settings/adminsettings/index.vue'),
        meta: {
          title: '管理员设置',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      }
    ]
  }
]

export default routes
