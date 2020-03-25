import request from "../untils/request";
export default{
    // 宝宝听——儿歌
    getsong:(params)=>request.get("/baby/bb.php",params),
    // 宝贝听——故事
    getstory:(params)=>request.get("/baby/bb.php",params)

    


}