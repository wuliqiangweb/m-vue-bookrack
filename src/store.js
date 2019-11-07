import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import Api from "./api/index";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     navlist:[],
     currentId:0,
     currentList:[],
     currentDetail:{},
     myBook:[]
  },
  mutations: {
    // setNav(state,payload){
    //    state.navlist=payload.navlist
    // },
    // setCurrentId(state,payload){
    //   state.currentId=payload.currentId
    // },
    // setCurrentList(state,payload){
    //    state.currentList=payload.currentList
    // },
    // setCurrentDetail(state,payload){
    //   state.currentDetail=payload.currentDetail
    // },
    //封装 公共的
    setState(state,payload){
      state[payload.key]=payload[payload.key]
    }
   
  },
  actions: {
    getNav({commit}){
      //获取导航数据
      Api.getNav().then(res=>{
          if(res.data.code===200){
            commit({type:"setState",key:"navlist",navlist:res.data.data})
          }
      })
    },
    getCurrentList({state,commit}){
      //获取当前列表的数据
      Api.getList({
        id:state.currentId
      }).then(res=>{
         if(res.data.code===200){
           commit({type:"setState",key:"currentList",currentList:res.data.data})
         }
       })
    },
    getMyBook({commit}){
     Api.getBook().then(res=>{
        commit({type:"setState",key:"myBook",myBook:res.data.data})
      })
    }
   
  }
})
