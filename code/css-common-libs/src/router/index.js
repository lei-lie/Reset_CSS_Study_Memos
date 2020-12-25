// 注册路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 初始化路由对象
const router = new VueRouter({
    routes: [
        {
            path:'/',
            component:() => import('@/views/img-demo')
        },
        {
            path:'/autoScroll',
            component:() => import('@/views/autoScrollForNews')
        }
    ]
})
export default router;