<template>
<div class="list2">
 
        <div class="lookhead">
            <router-link v-for="(item,index) in navtab" :key="index" :to="item.to">{{item.title}}</router-link>
        </div>

      
        <div class="lookbox" ref="lookbox">
            <router-view/>
            <span>数据加载中......</span>
        </div>
        
    </div>
   


</template>
<script>

// const 
// console.log(srcollLoad)
export default {
    data(){
        return {

        }
    },
    computed:{
        navtab(){
            return this.$router.options.routes.find(item=>item.path==="/bodylook").children.map(item=>({
            to:item.path,
            title:item.meta.title
        }))
        }
    }


}
</script>
<style lang="scss" scoped>
.list2{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.lookhead{
  text-align: center;
    width: 100%;
    height: 40px;
    background: #42b983;
    line-height: 40px;
    display: flex;
    // position: absolute;
    // z-index: 999;
    top:0;
    a{
        flex: 1;
        color: #000;
        &.router-link-exact-active {
            color: #42b983;
            color: red;
            font-weight: bolder;
          }
    }
}
.lookbox{
    flex: 1;
    overflow: auto;
    
}
    
</style>
