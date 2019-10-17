<template>
    <div class="header">
        <i class="iconfont icon-fanhui header-back"></i>
        <div class="header-input">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="输入城市/景点/游玩主体">
        </div>
        <router-link tag="div" to="/city" class="header-right">
            <span>{{this.$store.state.currentCity}}</span>
            <i class="iconfont icon-jiantou"></i>
        </router-link>
    </div>
</template>

<script>
export default {
      
}
</script>

<style lang="stylus" scoped>
    .header
        display flex
        height .88rem
        background-color #00bcd4
        color: #ffffff
        line-height: .88rem
        
        .header-back
            width: .88rem
            text-align: center

        .header-input
            flex 1
            height .64rem
            margin-top .12rem
            padding-left .15rem
            background-color #ffffff
            line-height .64rem
            border-radius .08rem

            .icon-sousuo    
                color #cccccc
                vertical-align middle

            input
                vertical-align middle
                color #212121
                font-size .28rem

        .header-right
            padding 0 .15rem
            
            span 
                vertical-align top

            .icon-jiantou
                font-size .24rem
                vertical-align top
            

</style>