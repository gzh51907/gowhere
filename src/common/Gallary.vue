<template>
  <div class="gallary" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for='(item,index) in gallaryImgs' :key='index'>
          <img class='swiper-img' :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name:'CommonGallary',
  props:['gallaryImgs',],
  data(){
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type:'fraction'
        },
        // 当Swiper的父元素变化时，例如window.resize，Swiper更新。
        // 只要观察到swiper这个插件发生变化，就自动重载swiper插件
       observer:true,
        observeParents:true
      },
    }
  },
  methods: {
    handleClick(){
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-container
    overflow:inherit
  .gallary
    position:fixed
    z-index:10
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    .wrapper
      position:absolute
      top:0
      bottom:0
      margin:auto
      width:100%
      height 0
      padding-bottom:62.5%
      background:#fff
    .swiper-img
      width:100%
    .swiper-pagination
      bottom:-1rem
      color:#fff
</style>
