<template>
  <div class="header">
    <div class="header-fixed">
      <router-link tag="i" to="/" class='iconfont icon-fanhui header-back'></router-link>
      <h2>清远周边逛</h2>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailHeader'
}
</script>

<style lang='stylus' scoped>
  .header
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