import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/login",
      component:()=>import("./views/index/index.vue"),
      children:[ {
          path:"/home",
          component:()=>import("./views/index/home/home.vue")
        },
        {
          path:"/book",
          component:()=>import("./views/index/book/book.vue")
        },{
          path:"/detail/:id",
          component:()=>import("./views/detail/detail.vue"),
          props:true
        }]
    },
   
    
    {
      path:"/login",
      component:()=>import("./views/login/Login.vue")
    },
    {
      path:"/register",
      component:()=>import("./views/register/Register.vue")
    }
  ]
})
