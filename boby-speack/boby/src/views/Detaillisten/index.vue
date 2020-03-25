<template>
  <div>
    <span @click="back">返回首页</span>
    <div class="auto">
      <h1 style="margin-bottom:20px">歌曲名称:小苹果</h1>
      <audio autoplay controls src="http://mp3.9ku.com/hot/2014/05-29/637791.mp3" v-timeupdate="valuetime" ref="audio"></audio>

      <div class="miuc">
        <p v-for="(item,index) in str" :key="index" :index="item.time" class="pp" @click="songaction(item.time,index)">{{item.content}}</p>
      </div>
            <i :class="['iconfont',this.playState?'icon-zanting':'icon-bofang', 'iconmine','breack']" style="font-size:100px" @click="playauto"></i>

      
    </div>
  </div>
</template>
<script>
import muic from "../../static/data/data";
export default {
  data() {
    return {
      muius: this.$route.query,
      valuetime: 0,
      indexof: 0,
      playState:true,
      str:[
  { time: 0, content: '小苹果' },
  { time: 1.5, content: '《老男孩猛龙过江》宣传曲' },
  { time: 5, content: '词曲：王太利' },
  { time: 7, content: '演唱：筷子兄弟' },
  { time: 9.3, content: '歌词编辑：薰风习习' },
  { time: 16.8, content: '我种下一颗种子 终于长出了果实' },
  { time: 20.71, content: '今天是个伟大日子' },
  { time: 24.46, content: '摘下星星送给你 拽下月亮送给你' },
  { time: 28.36, content: '让太阳每天为你升起' },
  { time: 32.24, content: '变成蜡烛燃烧自己 只为照亮你' },
  { time: 36.01, content: '把我一切都献给你 只要你欢喜' },
  { time: 39.9, content: '你让我每个明天都 变得有意义' },
  { time: 43.67, content: '生命虽短爱你永远 不离不弃' },
  { time: 47.69, content: '你是我的小呀小苹果儿' },
  { time: 51.38, content: '怎么爱你都不嫌多' },
  { time: 54.82, content: '红红的小脸儿温暖我的心窝' },
  { time: 58.99, content: '点亮我生命的火 火火火火' },
  { time: 63.05, content: '你是我的小呀小苹果儿' },
  { time: 66.7, content: '就像天边最美的云朵' },
  { time: 70.13, content: '春天又来到了花开满山坡' },
  { time: 74.28999999999999, content: '种下希望就会收获' },
  { time: 78.35, content: '                       ' },
  { time: 93.64, content: '从不觉得你讨厌 你的一切都喜欢' },
  { time: 97.53, content: '有你的每天都新鲜' },
  { time: 101.33, content: '有你阳光更灿烂 有你黑夜不黑暗' },
  { time: 105.24000000000001, content: '你是白云我是蓝天' },
  { time: 109.03, content: '春天和你漫步在盛开的 花丛间' },
  { time: 112.89, content: '夏天夜晚陪你一起看 星星眨眼' },
  { time: 116.66, content: '秋天黄昏与你徜徉在 金色麦田' },
  { time: 120.5, content: '冬天雪花飞舞有你 更加温暖' },
  { time: 124.44, content: '你是我的小呀小苹果儿' },
  { time: 128.14, content: '怎么爱你都不嫌多' },
  { time: 131.65, content: '红红的小脸儿温暖我的心窝' },
  { time: 135.77, content: '点亮我生命的火 火火火火' },
  { time: 139.77, content: '你是我的小呀小苹果儿' },
  { time: 143.52, content: '就像天边最美的云朵' },
  { time: 147.05, content: '春天又来到了花开满山坡' },
  { time: 151.15, content: '种下希望就会收获' },
  { time: 155.29, content: '                       ' },
  { time: 170.49, content: '你是我的小呀小苹果儿' },
  { time: 174.28, content: '怎么爱你都不嫌多' },
  { time: 177.67000000000002, content: '红红的小脸儿温暖我的心窝' },
  { time: 181.84, content: '点亮我生命的火 火火火火' },
  { time: 185.87, content: '你是我的小呀小苹果儿' },
  { time: 189.62, content: '就像天边最美的云朵' },
  { time: 193.09, content: '春天又来到了花开满山坡' },
  { time: 197.2, content: '种下希望就会收获' },
  { time: 201.23, content: '                       ' }
]
    };
  },

  mounted() {
    console.log(this.$route.query)
    //获取歌词的盒子
     let miu=document.getElementsByClassName("miuc")[0];
    //  console.log(miu)
    //  给盒子添加滚动事件
     miu.addEventListener("scroll",e=>{
          // console.log(this.indexof)

        //  console.log(e.target.scrollTop)
     })
    //  获取所有的p标签  就是所有的歌词
      let pp=document.getElementsByClassName("pp");
      // com是实例播放器audio
      let com = this.$refs.audio;
      // 给播放器添加事件
      // timeupdate 事件在音频/视频（audio/video）的播放位置发生改变时触发
      com.addEventListener("timeupdate", e => {
      //   this.valuetime = e.target.currentTime;
      // 循环所有的歌词  val是每一项  index是下标
      [...pp].forEach((val,index)=>{
        // val.getAttribute("index")是获取自定义属性  newindex的每段歌词所处的事件是多少
        let newindex=parseInt(val.getAttribute("index"))
        //this.valuetime是播放器没动一次的事件
        this.valuetime=parseInt(e.target.currentTime)
        // 做判断 如果播放器的事件等于当前歌词的时间
        if(newindex===this.valuetime){
          this.indexof=index
          // miu是歌词盒子  miu.scrollTop距离顶部的距离   index*35是在循环每一句歌词的下标*35  循环中每句距离顶部的距离
          miu.scrollTop=index*35
          // 删除歌词高亮
          document.querySelector(".on")&&document.querySelector(".on").classList.remove("on")
          // 添加歌词高亮
          pp[this.indexof].classList.add("on")
        } 
    })
    });

  },
  methods: {
    back() {
      this.$router.push("/detail");
    },
    // 点击暂停按钮暂停
    playauto(){
      // 获取音乐的dom节点
      let com = this.$refs.audio;   
      // 暂停
      this.playState?com.play():com.pause()
      this.playState=!this.playState
    },
    // 点击某句歌词从哪里开始播放
    songaction(time,index){
      let com = this.$refs.audio;
      com.currentTime=parseInt(time)
      // this.valuetime=20;
      // console.log(this.valuetime)

      this.indexof=index


    }
  },
  allsong(){
    
  }
};
</script>