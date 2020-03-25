import Vue from "vue"
const files=require.context("./",true,/index.vue$/)
files.keys().forEach(item=>{
    // item是每个文件的路径
    const com=files(item).default;
    Vue.component(com.name,com)
})