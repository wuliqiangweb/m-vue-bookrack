<template>
    <div class="book">
        <label><input type="checkbox" :checked="selectAll" @click="handleCheckedAll($event)">全选</label><br>
        <p v-for="(item,index) in myBook" :key="item.id">
           <label> <input type="checkbox" :checked="item.checked" @click="handleChecked(index,$event)">
            {{item.title}},</label>￥{{item.price}},数量: <button @click="sub(index)">-</button> {{item.count}}<button @click="add(index)">+</button>
            <button @click="handleDelete(index)">删除</button>
            
        </p>
        <p>总价：￥{{total}}</p>
    </div>
</template>
<script>

import Api from "../../../api/index";
export default {
    computed:{
        myBook(){
            return this.$store.state.myBook
        },
        //总价
        total(){
            console.log(this.myBook)
            return this.myBook.filter(v=>v.checked).reduce((prev,next)=>{
                return prev+next.count*next.price
            },0)
        },
        //控制全部选择
        selectAll(){
            return this.myBook.every(v=>v.checked) 
        }
    },
    methods:{
        //加加
        add(index){
            let myBook=this.myBook;
            myBook[index].count++;
            this.$store.commit({type:"setState",key:"myBook",myBook:myBook})
        },
        //减减
        sub(index){
            let myBook=this.myBook;
            if(myBook[index].count){
                myBook[index].count--;
               this.$store.commit({type:"setState",key:"myBook",myBook:myBook})
            }
           
        },
        //单个删除
        handleDelete(index){
             let myBook=this.myBook;
             myBook.splice(index,1);
             this.$store.commit({type:"setState",key:"myBook",myBook})
        },
        handleChecked(index,e){
             let myBook=this.myBook;
             myBook[index].checked=e.target.checked;
            // this.allchecked=myBook.every(v=>v.checked===false);
             this.$store.commit({type:"setState",key:"myBook",myBook})

        }, 
        //全选
        handleCheckedAll(e){
            console.log(e.target.checked)
          
              let myBook=this.myBook;
              myBook.forEach(item=>{
                 
                   item.checked=e.target.checked;
              })
            //反选

               this.$store.commit({type:"setState",key:"myBook",myBook})
        }
    },
    updated(){
       
       Api.update({
                myBookRack:this.myBook 
            }).then(res=>{
             console.log(res.data.msg)
        })
    },
    mounted(){
       this.$store.dispatch({type:"getMyBook"})
    }
}
</script>
<style scoped>

</style>