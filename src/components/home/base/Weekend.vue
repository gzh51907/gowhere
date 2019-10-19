<template>
    <div class="weekend">
        <h4>周末去哪</h4>
        <router-link tag="div" :to="{name: 'Week', params: {id: item.id}}" class="week-item" v-for="item in weekendList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <div class="product">
                <p class="product-name">{{item.title}}</p>
                <p class="product-desc">{{item.desc}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['weekendList']
}
</script>

<style lang='stylus' scoped>
    .weekend
        width 100%
        background #eeeeee

        h4
            height .8rem
            padding-left .26rem
            line-height .8rem
            color #22121
            font-weight normal 

        .week-item
            margin-bottom .1rem

            img 
                width 100%
                height 100%
            
            .product
                padding .14rem .2rem .2rem .2rem
                background-color #ffffff

                .product-name
                    overflow hidden
                    padding-right 1.4rem
                    color #212121
                    font-size .28rem
                    line-height .48rem
                    white-space nowrap
                    text-overflow ellipsis

                .product-desc
                    overflow hidden
                    padding-right 1.4rem
                    color #616161
                    font-size .24rem
                    line-height .42rem
                    white-space nowrap 
                    text-overflow ellipsis 
</style>