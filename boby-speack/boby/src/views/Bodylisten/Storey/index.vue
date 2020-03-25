<template>
    <div ref="storylist">
        <song v-for="(item,index) in alllist" :key="index"
        :downurl="item.downurl"
        :playcnt="item.playcnt"
        :name="item.name"
        :artist="item.artist"
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
            pagesize:30
        }
    },
    created() {
        this.getlist()

    },
    mounted() {
        this.srcollLoad(this.$refs.storylist.parentNode,()=>{
            this.pagesize+=30
            this.getlist()
        })
    },
    methods: {
        getlist(){
        this.$http.getstory({
            type:"getlist",pagesize:this.pagesize,listid:6
        }).then(res=>{
            const {list}=res.data
            this.alllist=list.splice(1)
        })
        }
    },
    
}
</script>