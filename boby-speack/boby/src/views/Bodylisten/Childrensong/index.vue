<template>
    <div ref="chidren">
        <song v-for="(item,index) in alllist" :key="index"
        :downurl="item.downurl"
        :playcnt="item.playcnt"
        :name="item.name"
        :artist="item.artist"
        :type="type"
        />
    </div>
</template>
<script>
import srcollLoad from "../../../mixins/scrollload";
export default {
    mixins:[srcollLoad],    
    data(){
        return {
            alllist:[],
            type:"儿歌",
            pagesize:30
        }
    },
    created() {
        this.getlist()
    },
    mounted() {
        this.srcollLoad(this.$refs.chidren.parentNode,(e)=>{
            this.pagesize+=30;
            this.getlist()


        })
    },
    methods: {
        getlist(){
        this.$http.getsong({
            type:"getlist",pagesize:this.pagesize,listid:5
        }).then(res=>{
            const {list}=res.data
            this.alllist=list.splice(1)
            // console.log(this.alllist)
        })
        }
    },
}
</script>