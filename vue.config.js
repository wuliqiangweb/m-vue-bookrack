
// const bodyParser = require('body-parser');
// const {bookNavData,bookMallData,bookMallDetailData}=require("./data");
// let userList=[{
//     user:"wlq",
//     pwd:"123456"
// },{
//     user:"1",
//     pwd:"1"
// }]
// let myBook=[];
// module.exports={
//     lintOnSave:true,
//     devServer:{
//         before(app){
//            app.use(bodyParser.json());
//            app.post("/api/login",(req,res)=>{
             
//                let {user,pwd}=req.body;
              
//                let users=userList.find(item=>item.user===user);
//                if(users){
//                    if(users.pwd===pwd){
//                        res.send({
//                            code:200,
//                            message:"登录成功"
//                        })
//                    }else{
//                        res.send({
//                            code:400,
//                            message:"密码错误"
//                        })
//                    }
//                }else{
//                    res.send({code:400,message:"用户名不存在"})
//                }
//            });
//            app.get("/api/nav",(req,res)=>{
//                res.send({
//                    code:200,
//                    data:bookNavData
//                })
//            });
//            app.get("/api/list",(req,res)=>{
//                let {id}=req.query;
             
//                let list=bookMallData.find(item=>item.id==id).list;
//                list.forEach(item=>{
//                    item.is_in_my_book=myBook.findIndex(book=>book.id==item.id)>=0
//                })
//                res.send({
//                    code:200,
//                    data:list
//                })
//            });
//            app.get("/api/detail",(req,res)=>{
//                let {id,currentId}=req.query;
               
//                let detail=bookMallDetailData[currentId].list.filter(v=>v.id==id)[0];
//                bookMallDetailData[currentId].list.forEach(item=>{
//                 item.is_in_my_book=myBook.findIndex(book=>book.id==item.id)>=0
//                })
//                res.send({
//                    code:200,
//                    data:detail
//                })
//            });
//            app.post("/api/add",(req,res)=>{
//                 let {item}=req.body;
//                 myBook.push(item);
//                 res.send({
//                     code:200,
//                     data:myBook,
//                     message:"添加成功"
//                 })
//            });
//            app.get("/api/book",(req,res)=>{
//                res.send({
//                    code:200,
//                    data:myBook
//                })
//            });
//            app.post("/api/updated",(req,res)=>{
//                let {myBookRack}=req.body;
//                myBook=myBookRack;
//                res.send({
//                    code:200,
//                    data:myBookRack,
//                    msg:"更新完成"
//                })
//            })
//         }
//     }
// }