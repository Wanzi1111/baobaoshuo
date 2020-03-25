<template>
    

              <div class="listnav">
            

             <div class="imgs">
                     <img :src="$attrs.pic">
                 </div>
                 <div class="titleRight">
                     <b style="display:block;margin-bottom:20px">{{$attrs.name}}</b>
                    <span style="margin-right:20px">{{$attrs.artist}}</span><span>播放:{{$attrs.playcnt}}</span>
                    <i class="iconfont icon-Shapecopy icon"></i>
                 </div>  

           

               
                 </div>
  
</template>
<script>
export default {
    name:"list",
    data(){
        return {
            aldata:[]

        }
    },
    props:{
        alldata:Array
    },
   created() {
    //    console.log(this.$attrs)
   },

}
</script>