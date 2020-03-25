// 封装全局指令
import Vue from "vue"
Vue.directive("timeupdate",{
    inserted:function(el,binding){
        el.currentTime=binding.value
        console.log(binding)
    }
})