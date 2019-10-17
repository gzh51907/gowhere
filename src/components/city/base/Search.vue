<template>
    <div class="search">
        <input type="text" v-model="keyword" class="header-input" placeholder="请输入城市名和拼音">
        <div class="search-content" v-show="keyword" ref="wrapper">
            <ul>
                <li class="search-item" v-for="(city, index) in filterCity" :key="index" @click="handleClick(city.name)">{{city.name}}</li>
                <li class="search-item" v-show="isShow">未匹配到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: ['cities'],
    data(){
        return  {
            keyword: ''
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
        })
    },
    computed:{
        filterCity(){
            // 定一个空数组，存储过滤后的城市
            let result = []
            for(let key in this.cities){
                this.cities[key].forEach((city, index) => {
                    if(city.name.includes(this.keyword) || city.spell.includes(this.keyword)){
                        result.push(city)
                    }
                })
            }
            return result
        },
        isShow(){
            return !this.filterCity.length
        }
    },
    methods: {
        handleClick(city){
            this.$store.commit('changeCity', city)
            this.$router.push('/')
        }
    }
}
</script>

<style lang='stylus' scoped>
    .search
        position relative
        padding .1rem
        background-color #00bcd4
        height .72rem
        z-index 20

        .header-input
            width 100%
            height 100%
            border-radius .1rem
            text-align center

        .search-content
            position fixed
            overflow hidden
            top 1.78rem
            right 0
            left 0
            bottom 0
            background-color #eeeeee
            
            .search-item
                line-height .8rem
                padding-left .3rem
                border-bottom: 1px dotted #aaaaaa

</style>