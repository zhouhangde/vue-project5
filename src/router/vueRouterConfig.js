import yiji from './../views/yiji.vue';
import yijiTwo from './../views/yijiTwo.vue';
import erjiOne from './../views/erjiOne.vue';
import erjiTwo from './../views/erjiTwo.vue';
export default[

    {
        path:'/yiji',
        component:yiji,
        children:[
            {
                path:'erjiOne',
                component:erjiOne
            },
            {
                path:'erjiTwo',
                component:erjiTwo
            },
        ]
    },
    {
        path:'/yijiTwo',
        component:yijiTwo
    },
    {
        path:'/',
        redirect:'/yiji'   //配置默认页面
    }
];