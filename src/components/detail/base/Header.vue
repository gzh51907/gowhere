<template>
  <div class="header">
    <router-link tag="i" to="/" v-show="isShow" class="header-goback iconfont icon-fanhui"></router-link>
    <div class="header-fixed" v-show="!isShow" :style="styleObj" ref="wrapper">
      <router-link tag="i" to="/" class='iconfont icon-fanhui header-back'></router-link>
      <h2>景点详情</h2>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data(){
      return  {
          isShow: true,
          styleObj: {}  // 存储渐变样式
      }
    },
    methods: {
      handleScroll(){
        // console.log(document.documentElement.scrollTop)
        let scrollTop = document.documentElement.scrollTop
        // console.log(scrollTop)

        if(scrollTop > 40){
          this.isShow = false
          this.styleObj = {
            opacity: (scrollTop - 40) / 100
          }
        }else{
          this.isShow = true
        }
        // console.log('header滚动了')
      }
    },
    activated(){  // 绑定事件 监听滚动高度
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated(){  
      /*
        注意点：
          1、滚动事件和better-scroll插件的回弹滚动事件会发生冲突，导致滚动事件不会显示
          2、给window绑定滚动事件，如果不移除监听事件，在其他页面滚动时，一样会触发handleScroll函数
        
        所以，每次activated中添加事件监听以后 都要在deactivated 中移除事件监听
      
      
      */
      window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang='stylus' scoped>
  .header
    position:fixed
    left:0
    top:0
    right:0
    z-index:1
    .header-goback
      position:absolute
      width: .8rem
      height: .8rem
      line-height: .8rem
      border-radius: 50%
      text-align: center
      background: rgba(0, 0, 0, .8)
      color:#fff
    .header-fixed
      position:relative
      background:#00bcd4
      line-height:.86rem
      color:#fff
      text-align:center
      .header-back
        position:absolute
        left:0
        top:0
        width:.8rem
        color:#fff
      h2
        text-align:center
        font-size:.32rem
</style>