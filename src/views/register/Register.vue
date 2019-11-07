<template>
      <div class="login">
          <p>用户名：<input v-model="user" type="text"></p>
          <p>密码：<input v-model="pwd" :type='show ?"text":"password"'>
           <span class="icon iconfont" :class='show ?"icon-xianshimima":"icon-yincangmima"' @click="handleShow"></span>
          </p>
          <p><button @click="register">注册</button></p>
      </div>
</template>

<script>

import Api from "../../api/index"
export default {
    data(){
        return {
            user:"",
            pwd:"",
            show:false
        }
    },
    methods:{
        handleShow(){
           this.show=!this.show
        },
        register(){
            if(this.user.trim()===""){
                alert("用户名不能为空");
                return;
            }
            if(this.pwd.trim()===""){
                alert("密码不能为空");
                return;
            }
           Api.register({
                    user:this.user,
                    pwd:this.pwd
                }).then(res=>{
                    console.log(res)
                if(res.data.code===200){
                   this.$router.push("/home")
                }else{
                alert(res.data.message)
               }
            })
        }
    }
}
</script>

<style scoped>
.iconfont{
    display: inline-block;
    width: 30px;
    height: 30px;
    margin:10px 0 0 -20px;
}
</style>