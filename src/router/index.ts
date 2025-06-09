import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter( {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/editor.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.body.classList.add('page-loading')
    next()
})

router.beforeEach(() => {
    setTimeout( () => {
        document.body.classList.remove('page-loading')
    }, 1000)
})

export default router