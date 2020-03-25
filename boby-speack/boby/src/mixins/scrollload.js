import {throttle} from "../untils/fang";//节流方法

const scrollLoad={
    methods: {
        srcollLoad(scrolllist,Loadfunc){
            // 获取到滚动的元素
        if(!scrolllist){
            return
        }
        const clientheight=scrolllist.offsetHeight//可视区高度
        // 在scroll的后面调用throttle节流方法使事件不频繁触发
        scrolllist.addEventListener("scroll",throttle((e)=>{
            // 判断页面是否滚动到底部
            // 滚动距离+可视区高度=页面高度
           let scrolltop=scrolllist.scrollTop//滚动距离
           let pageheight=scrolllist.children[0].offsetHeight//内容高度
           if(pageheight-10<clientheight+scrolltop){
              Loadfunc&&Loadfunc(e)
            // console.log("加载数据中")
           }
        }))
        }
        
    }
}
export default scrollLoad