<template>
    <div ref="storylist">
           <list v-for="(item,index) in listdata" :key="index"
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
import srcollLoad from "../../../mixins/scrollload";
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
        this.srcollLoad(this.$refs.storylist.parentNode,(e)=>{
            this.pagesize+=30;
            this.getlist()
        })
    },
    methods: {
        getlist(){
        this.$http.getstory({
            type:"getvideos",pagesize:this.pagesize,collectid:27
        }).then(res=>{
            const {list,nav}=res.data
            this.listdata=list.splice(1)
        })
        }
    },
}
</script>