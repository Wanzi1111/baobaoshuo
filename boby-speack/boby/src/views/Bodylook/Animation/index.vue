<template>
    <div ref="animation">
        <div class="animatelist" v-for="(item,index) in animatedata" :key="index" @click="clickVideo">
            <div class="imgs">
                <img :src="item.pic" alt="">
                <span class="nice">{{item.score}}分</span>
            </div>
            <b>{{item.name}}</b>
            <p>共{{item.method}}集</p>
        </div>
    </div>
</template>
<script>
import srcollLoad from "../../../mixins/scrollload"
export default {
    mixins:[srcollLoad],
    data(){
        return {
            animatedata:[],
            pagesize:30
        }
    },
    created() {
        this.getlist()
   
    },
    mounted() {
        this.srcollLoad(this.$refs.animation.parentNode,(e)=>{
            this.pagesize+=30
            this.getlist()
        })
    },
    methods: {
        getlist(){
                 this.$http.getanimate({
            type:"getlistv2",act:"home",pagesize:this.pagesize,pid:26
        }).then(res=>{
            const {list,nav}=res.data
            this.animatedata=list.splice(1)
            // console.log(res.data)
        })

        },
        clickVideo(){
            // 跳到动画片播放页面
            this.$router.push("/videoanimation")
        }
    },
}
</script>