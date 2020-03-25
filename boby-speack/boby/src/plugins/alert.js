import myalert from "../components/Alert/";
import Vue from "vue"
let $alert =function(tip,time=3){
    let Com=Vue.extend(myalert);//组件原型
    console.log(Com)

    let Instaill=new Com({
        propsData:{
            tip,
            time
        }

    })
    Instaill.$mount();
    document.body.append(Instaill.$el)
}
let Alert={
    install(Vue){
        Vue.prototype.$alert=$alert
    }
}
export {$alert as Alerts}
export default Alert