<template>
    <div class="header">
        <router-link tag="i" to="/" class="iconfont icon-fanhui header-back"></router-link>
        <h2>城市选择</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
}
</script>

<style lang="stylus" scoped>
    .header
        position relative
        height .86rem
        background-color #00bcd4
        color: #ffffff
        line-height: .86rem
        text-align center
        
        .header-back
            position absolute
            top 0
            left 0
            width: .86rem
            height .86rem
            text-align: center
            color #ffffff


        

</style>