import request from "../untils/request";



export default{
    // 宝宝看——儿歌
    getlook:(params)=>request.get("/baby/bb.php",params),
    // 宝贝看——故事
    getstory:(params)=>request.get("baby/bb.php",params),
    // 宝宝看——故事详情
    getstorydetail:(params)=>request.get("baby/bb.php",params),
    // 宝宝看——动画片
    getanimate:(params)=>request.get("baby/bb.php",params),
    // 动画片播放详情
    getvideo:(params)=>request.get("baby/bb.php",params)

}