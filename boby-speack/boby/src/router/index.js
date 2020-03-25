import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/bodylook/children"
  },
  {
    path: '/bodylisten',
    name: 'bodylisten',
    fontNav:true,
    redirect:"/bodylisten/childrensong",
    meta:{
      title:"宝宝听",
      icon:"icon-icon-test"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Bodylisten/'),
    children:[{
      path: '/bodylisten/childrensong',
      name: 'bodylisten/childrensong',
      meta:{
        title:"儿歌",
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/Bodylisten/Childrensong/')
    },{
      path: '/bodylisten/storey',
      name: 'bodylisten/storey',
      meta:{
        title:"故事",
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/Bodylisten/Storey/')
    }]
  },{
    path: '/bodylook',
    name: 'bodylook',
    fontNav:true,
    redirect:"/bodylook/children",
    meta:{
      title:"宝宝看",
      icon:"icon-kanguo"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Bodylook/'),
    children:[{
      path: '/bodylook/children',
      name: 'bodylook/children',
      meta:{
        title:"儿歌",
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/Bodylook/Children/')
    },{
      path: '/bodylook/storey',
      name: 'bodylook/storey',
      meta:{
        title:"故事",
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/Bodylook/Storey/')
    },{
      path: '/bodylook/animation',
      name: 'bodylook/animation',
      meta:{
        title:"动画片",
      },
      component: () => import(/* webpackChunkName: "about" */ '../views/Bodylook/Animation/')
    }]
  },{
    path: '/mine',
    name: 'mine',
    fontNav:true,
    meta:{
      title:"我的",
      icon:"icon-daohanglan-05"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine/')//我的
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail/')//详情
  },
  {
    path: '/detaillisten',
    name: 'detaillisten',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detaillisten/')//详情音频
  },
  {
    path: '/videoanimation',
    name: 'videoanimation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Videoanimation/')//详情音频
  },  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')//404页面
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    ...routes,
    {
      path:"/404",
      component:()=>import("../views/404.vue")
    },{
      path:"*",
      component:()=>import("../views/404.vue")
    }
  ]
})
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title||"宝宝说"
  next()

})
export {routes}
export default router
