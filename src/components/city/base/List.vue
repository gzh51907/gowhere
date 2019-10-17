<template>
    <div class="list" ref="wrapper">
        <!-- 
            下面这个div的作用：
                添加这个div主要是为了使用better-scroll框架，因为要是滚动元素滚动和回弹，必须是子元素高于父元素，注意是子元素，如果不加下面的div，我们只是将所有的子元素的高度求和 大于 父元素，并不满足要求，所以添加一个div包裹所有的子元素
         -->
        <div>
            <!-- 当前城市 -->
            <div class="list-current">
                <h3 class="list-title">当前城市</h3>
                <div class="city">
                    <span>{{this.$store.state.currentCity}}</span>
                </div>
            </div>

            <!-- 热门城市 -->
            <div class="list-hot">
                <h3 class="list-title">热门城市</h3>
                <div class="city">
                    <span v-for="(city, index) in hotCities" :key="index" :spell="city.spell" @click="handleClick(city.name)">{{city.name}}</span>
                </div>
            </div>

            <!-- 城市列表 -->
            <div class="list-item" v-for="(city, key) in cities" :key="key">
                <h3 class="list-title" :ref="key">{{key}}</h3>
                <ul>
                    <li class="city-item" v-for="(item, index) in city" :key="index" @click="handleClick(item.name)">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// 引入better-scroll框架
import BScroll from 'better-scroll'

export default {
    props: ['cities', 'hotCities'],
    data(){
        return {
            currentCity: ''
        }
    },
    mounted(){
        // console.log(this.$refs.wrapper)
        // 这个this.scoll是什么意思？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
        this.scroll = new BScroll(this.$refs.wrapper, {
            // better-scroll插件默认是禁用了内部的点击事件，要使用点击事件，就要将 click 属性的值设置为true
            click: true
        })
    },
    /*
        方法：
            1、 因为没有办法在watch中监听仓库中数据的变化，所以定义一个计算属性letter，
            2、letter是一个计算属性，它的变化依赖仓库中letter值的变化,所以我们定义一个 属性，能够监听store仓库中数据的变化，然后在watch属性中监听它的变化
    
    */
    computed: {        
        letter(){
            return this.$store.state.letter
        }
    },
    // 观察仓库中letter的变化，采用事件监听的方式
    watch:{
        letter(value){
            // 跳到指定的dom节点
            console.log(this.$refs[value][0])
            // 插件提供的方法 scrollToElement 跳转到指定的元素
            this.scroll.scrollToElement(this.$refs[value][0])
        }
    },
    methods: {
        handleClick(city){
            // console.log(city)
            this.$store.commit('changeCity', city)
            this.$router.push('/')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-bottom:before
        border-color #aaaaaa
    .list
        position fixed 
        overflow hidden
        top 1.78rem
        left 0
        right 0
        bottom 0

    .list-title 
        line-height 0.54rem
        background-color #eeeeee
        padding-left .2rem
        color #666
        font-size .26rem
    
    .city
        padding-left .15rem

        span 
            display inline-block
            width 28%
            padding .15rem .2rem
            margin .1rem
            border .01rem solid #cccccc
            text-align center
            border-radius .05rem
            box-sizing border-box
    
    .city-item  
        line-height .8rem
        padding-left .3rem
        border-bottom: 1px dotted #aaaaaa

</style>