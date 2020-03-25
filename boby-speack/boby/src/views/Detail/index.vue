<template>
    <div>
        <span @click="back">返回首页</span>
        <h1>儿歌详情</h1>
            <div class="songlist" v-for="(item,index) in songlist" :key="index" @click="clicklisten(item)">
                    <!-- <div class="imgs">
                     <img :src="item.downurl">
                 </div> -->
            <b style="display:block;margin-bottom:20px">{{item.name}}</b>
            <span style="margin-right:20px">{{item.artist}}</span><span>播放:{{item.playcnt}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            songlist:[]

        }
    },
    created() {
        this.$http.getstorydetail({
            type:"getlist",page:1,pagesize:30,listid:16
        }).then(res=>{
            const {list}=res.data
            this.songlist=list.splice(1)
        })
    },
    methods: {
        clicklisten(item){
            this.$router.push({path:"/detaillisten",query:item})
        },
            back(){
            this.$router.push("/bodylisten/childrensong")
        }
    },
}
</script>