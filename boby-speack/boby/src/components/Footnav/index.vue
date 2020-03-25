<template>
  
        <ul class="foot">
            
        <router-link :to="item.path" tag="li"
        v-for="(item,index) in footNav" :key="index"
        >
              <span :class="{
                'iconfont':true,
                [item.icon]:true
            }"></span>
            <span>{{item.title}}</span>
           
            </router-link>
           

        </ul>
   
</template>
<script>
import {routes} from "../../router/index";
export default {
    name:"footnav",
    data(){
        return {

        }
    },
    computed: {
        footNav(){
            return routes.filter(item=>item.fontNav).map(item=>({
                // title:item.meta.title,
                path:item.path,
                ...item.meta
            }))
        }
    },
    // created() {
    //     console.log(this.footNav)
    // }
}
</script>
