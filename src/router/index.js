import Vue from 'vue'
import VueRouter from 'vue-router'

let Login = () =>
    import ('../components/Login');
let Display = () =>
    import ('../components/Front/Display');
let Exam = () =>
    import ('../components/Front/Exam')
let Sign = () =>
    import ('../components/Front/Sign')
let UserLogin = () =>
    import ('../components/UserLogin')
let Home = () =>
    import ('../components/Home');
let Front = () =>
    import ('../components/Front/Front');
let Welcome = () =>
    import ('../components/Welcome');
let Users = () =>
    import ('../components/user/Users');
let Rights = () =>
    import ('../components/rights/Rights');
let Roles = () =>
    import ('../components/rights/Roles');
let Category = () =>
    import ('../components/goods/Category');
let Params = () =>
    import ('../components/goods/Params');
let GoodsList = () =>
    import ('../components/goods/List');
let GoodsAdd = () =>
    import ('../components/goods/listChildComponents/ListAdd');
let Order = () =>
    import ('../components/order/Order');
let Report = () =>
    import ('../components/report/Report');

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/userlogin'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/sign',
        component: Sign
    },
    {
        path: '/display',
        component: Display
    },
    {
        path: '/exam',
        component: Exam
    },
    {
        path: '/userlogin',
        component: UserLogin
    },
    {
        path: '/front',
        component: Front
    },
    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        children: [{
                path: '/welcome',
                component: Welcome
            },
            {
                path: '/users',
                component: Users
            },
            {
                path: '/rights',
                component: Rights
            },
            {
                path: '/roles',
                component: Roles
            },
            {
                path: '/categories',
                component: Category
            },
            {
                path: '/params',
                component: Params
            },
            {
                path: '/goods',
                component: GoodsList
            },
            {
                path: '/add',
                component: GoodsAdd
            },
            {
                path: '/orders',
                component: Order
            },
            {
                path: '/reports',
                component: Report
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

// 添加全局前置导航守卫
router.beforeEach((to, from, next) => {
    // 如果访问的是登录页，直接放行
    if (to.path === '/login' || to.path === '/userlogin') {
        return next();
    }
    // 从sessionStorage中取出token值
    let token = sessionStorage.getItem('token');
    // 如果token不存在，说明没有登录，就强制跳转到登录页
    if (!token) {
        return next('/userlogin');
    }
    next();
});

export default router