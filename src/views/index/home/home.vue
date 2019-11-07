<template>
    <div class="home">
        <div class="home-nav">
             <Nav></Nav>
        </div>
        
         <div class="home-con">
          <List></List>
         </div>
         
    </div>
</template>
<script>
import Nav from "../../../components/Nav";
import List from "../../../components/List";
export default {
    components:{
       Nav,
       List
    },
    mounted(){
        this.$store.dispatch("getNav");
        this.$store.dispatch("getCurrentList")
    }
}
</script>
<style lang="scss">
  .home{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
  }
  .home-nav{
      width: 100%;
      height: 50px;
  }
  .home-con{
      width: 100%;
      flex:1;
      overflow: auto;
  }
</style>