//封装api接口
import axios from "axios";
import url from "./urls";

axios.defaults.baseURL = 'http://localhost:83/'
const common=async (config)=>{
  const response= await axios(config);
  return response;
}
export default {
    getNav:()=>common({url:url.getNav}),
    getList:(data)=>common({url:url.getList,params:data}),
    getBook:()=>common({url:url.getBook}),
    add:(data)=>common({url:url.add,data,method:"post"}),
    login:(data)=>common({url:url.login,data,method:"post"}),//登录
    register:(data)=>common({url:url.register,data,method:"post"}),//注册
    update:(data)=>common({url:url.update,data,method:"post"}),
    detail:(data)=>common({url:url.detail,params:data})
}
