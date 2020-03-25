<template>
    <div>
        <b>你的也页面跑丢了！{{time}}自动加载</b>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            time:3,
            timer:null

        }
    },
    created() {
       this.timer=setInterval(()=>{
           this.time--
           if(this.time<=0){
                clearTimeout(this.timer)//清除计数器
                this.$router.replace("/")//跳转到首页
           }
       },1000)
    // this.times()    
    },
    methods: {
        // 多种情况下setInterval会发生时差 我们采用se 递归实现tTimeout
        // times(){
        //     setTimeout(()=>{
        //         this.time--;
        //         if(this.time>=1){
        //             this.times()
        //         }
        //         this.$router.replace("/")

        //     },1000)
            
        // }
    },

}
</script>