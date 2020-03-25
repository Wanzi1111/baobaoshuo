<template>
    <div class="listen1">
         <div class="listenhead">
     <router-link v-for="(item,index) in navtab" :key="index" :to="item.to">{{item.title}}</router-link>
        </div>
        <div class="listenlist">
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    computed: {
             navtab(){
                    return this.$router.options.routes.find(item=>item.path==="/bodylisten").children.map(item=>({
            to:item.path,
            title:item.meta.title
        })) 
    }   
}

}
</script>