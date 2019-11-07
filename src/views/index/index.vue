<template>
    <div class="index">
        <div class="nav">
            <router-link to="/home">首页</router-link>
            <router-link to="/book">书包</router-link>
       </div>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped scss="lang">
.index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

}
.nav{
    width:100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    

}
.router-link-active{
    color:red;
}
.main{
    flex:1;
    width: 100%;
    overflow: hidden;
}
</style>