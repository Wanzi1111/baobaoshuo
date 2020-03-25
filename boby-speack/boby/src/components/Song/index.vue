<template>
    <div>
      <div class="songlist" @click="detail">
            <b style="display:block;margin-bottom:20px">{{$attrs.name}}</b>
            <span style="margin-right:20px">{{$attrs.artist}}</span><span>播放:{{$attrs.playcnt}}</span>
            <i class="iconfont icon-jiantou iconsong"></i>
        </div>
    </div>
</template>
<script>
export default {
    name:"song",
    data(){
        return {
            alllist:[]
        }
    },
    props:{
        data:Object,
    },
    created() {
        // console.log(this.data)
    },
       methods: {
       detail(){
           if(this.$attrs.type==="儿歌"){
           this.$router.push("/detail")
           }else{
               return
           }
       }
   },
}
</script>