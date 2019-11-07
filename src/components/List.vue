<template>
  <div class="list">
      <div class="item" v-for="item in currentList" :key="item.id"
        
      >
        <img v-lazy="item.avatar"  @click="todetail(item.id)" alt="">
        <div class="btn">
            <p>{{item.title}}</p>
            <p>价格：{{item.price}}</p>
            <p><button v-if="item.is_in_my_book">已收藏</button>
            <button v-else @click="handleAdd(item)">收藏</button></p>
        </div>
      </div>
  </div>
</template>

<script>

import Api from "../api/index";
export default {

  computed:{
      currentList(){
          return this.$store.state.currentList
      }
  },
  methods:{
    todetail(id){
      this.$router.push(`/detail/${id}`)
    },
    handleAdd(item){
      //store中的初始值
      let myBook=this.$store.state.myBook;
      let index=myBook.findIndex(book=>book.id===item.id);
     
       myBook.push(item);
        item.count=1;
        item.checked=true;
        
      
      //存在store中
      this.$store.commit({type:"setState",key:"myBook",myBook});
      //存在后端
     Api.add({
          item
        }).then(res=>{
        
        if(res.data.code===200){
          this.$store.dispatch("getCurrentList")
        }
      })
    }
  }
}
</script>

<style lang="scss">
.list{
  width: 100%;
  overflow: auto;
  
  .item{
    width: 100%;
    height: 300px;
    margin:5px;
    img{
      float: left;
    }
    .btn{
      float: left;
      margin-left: 20px;
      p{
        line-height: 30px;
      }
    }
  }
}
</style>