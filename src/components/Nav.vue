<template>
  <div class="top">
       <span v-for="item in navlist" :key="item.id" :class="{active:currentId===item.id}"
         @click="setId(item.id)"
       >{{item.title}}</span>
  </div>
</template>

<script>
export default {
 methods:{
   setId(currentId){
       this.$store.commit({type:"setState",key:"currentId",currentId})
       this.$store.dispatch("getCurrentList")
   }
 },
 computed:{
     navlist(){
         return this.$store.state.navlist
     },
     currentId(){
         return this.$store.state.currentId
     }
 }
}
</script>

<style scoped>
.top{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.active{
    color:red;
}
</style>