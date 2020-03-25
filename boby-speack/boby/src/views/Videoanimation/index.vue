<template>
    <div class="video">
<video width="100%" height="240" controls v-for="(item,index) in videodata" :key="index" style="margin-top:50px">
  <source :src="item.downurl" type="video/mp4" autoplay>
</video>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            videodata:[]

        }
    },
    created() {
        this.$http.getvideo({
          type:"getvideos",pagesize:30
        }).then(res=>{
            const {list}=res.data
            this.videodata=list.splice(1)
            console.log(this.videodata)
        })
    },
}
</script>