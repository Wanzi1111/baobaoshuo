<template>
       <div ref="scrollbox">
           <list  v-for="(item,index) in listdata" :key="index"
           :name="item.name"
           :artist="item.artist"
           :playcnt="item.playcnt"
           :audio="item.audio"
           :pic="item.pic"
           :downurl="item.downurl"
           />
    </div>
</template>
<script>
import srcollLoad from "../../../mixins/scrollload"
// console.log(mixins:[srcollLoad])
export default {
    mixins:[srcollLoad],
    data(){
        return {
            listdata:[],
            pagesize:30

        }
    },
    created() {
     this.getlist()
        
    },
        mounted() {
        this.srcollLoad(this.$refs.scrollbox.parentNode,(e)=>{
            this.pagesize+=30
            this.getlist()
        })   
    },
    methods: {
        getlist(){
   this.$http.getlook({
                type:"getvideos",pagesize:this.pagesize,collectid:29
        }).then(res=>{
            const {list,nav}=res.data
            this.listdata=list.splice(1)
        })
        }
    },

}
</script>