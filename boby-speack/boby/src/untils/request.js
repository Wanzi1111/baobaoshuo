import axios from "axios";
import router from "../router/index";
import {Alerts} from "../plugins/alert";
const baseURL=process.env.NODE_ENV === 'production'?"":"/api";
const request=axios.create({
    baseURL
})
// 请求前拦截
request.interceptors.request.use(function(config){
    return config

},function(error){
    return Promise.reject(error)
})

// 请求后拦截
request.interceptors.response.use(function(data){
    return data

},function(error){
    switch(error.response.status){
        case 404:
        Alerts("接口走丢了",3);
        console.log(404)
        router.push("/404")
        break;
        case 401:
        Alerts("您可能未登录，请重新登录");
        break;
        case 403:
        Alerts("您没有权限访问");
        break;
        case 500:
        Alerts("服务器报错");
        break;
        case 406:
        Alerts("可能您的参数不合法");
        break;
        default:
        Alerts("报错了");
    }
    return Promise.reject(error)
})

// 抛出方法
export default{
    get(url,params={}){
        return request.get(url,{params})
    },
    post(url,data={}){
        return request.post(url,data)
    }
}