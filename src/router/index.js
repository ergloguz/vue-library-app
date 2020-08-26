import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "@/views/Welcome";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/book-add',
    name: 'NewAddBook',
    component: () => import(/* webpackChunkName: "about" */ '../views/book/book-add.vue'),
  },
  {
      path: '/book-list',
      name: 'NewBookList',

      component: () => import(/* webpackChunkName: "about" */ '../views/book/book-list.vue'),
    },
  {
      path: '/user-set',
      name: 'NewSetUser',
      component: () => import(/* webpackChunkName: "about" */ '../views/user/user-set.vue')
  },
  {
      path: '/user-get',
      name: 'NewGetUser',
      component: () => import(/* webpackChunkName: "about" */ '../views/user/user-get.vue')
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
