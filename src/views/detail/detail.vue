<template>
    <div>
        <button @click="$router.back(-1)">返回</button>
         <div class="detail">
        
        <img :src="currentDetail.avatar" alt="">
        <p>{{currentDetail.summary}}</p>
        <p>
          <button v-if="currentDetail.is_in_my_book">已收藏</button>
          <button v-else @click="handleAdd()">收藏</button> 
          
          </p>
    </div>
    </div>
   
</template>

<script>

import Api from "../../api/index";
export default {
 props:["id"],//路由props传参的获取方式
 computed:{
     
    currentDetail(){
        //从vuex中的store取数据
        return this.$store.state.currentDetail
    }
 },
methods:{
   handleAdd(){
     let item=this.currentDetail;
     item.count=1;
     item.checked=true;
      Api.add({
          item
        }).then(res=>{
        // console.log(res)
        if(res.data.code===200){
         this.currentDetail.is_in_my_book=true;
        }
      })
   }
},
 mounted(){ 
    //动态路由传参
   let id=this.$route.params.id;
   console.log(this.$store.state.currentId)
   console.log(id)
    Api.detail({
           id,
           currentId:this.$store.state.currentId
         }).then(res=>{
         if(res.data.code===200){
             this.$store.commit({type:"setState",key:"currentDetail",currentDetail:res.data.data});         
         }   
       })
 }
}

</script>

<style>

</style>