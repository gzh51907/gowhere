<template>
    <div class="home">
        <!-- 使用局部组件 -->
        <home-header></home-header>
        <div ref="wrapper" class="container">
            <div>
                <home-swiper :swiperList='swiperList'></home-swiper>
                <home-nav :imgList="iconList"></home-nav>
                <home-favorite></home-favorite>
                <home-weekend :weekendList="weekendList"></home-weekend>
            </div>
        </div>
    </div>
</template>

<script>
// 引入局部组件
import HomeHeader from './base/Header'
import HomeSwiper from './base/Swiper'
import HomeNav from './base/Nav'
import HomeFavorite from './base/Favorite'
import HomeWeekend from './base/Weekend'

// 引入滚动回弹插件
import BScroll from 'better-scroll'

// 导入请求数据的函数
import {getHome} from '@/api'

export default {
    name: 'Home',
    data(){
        return {
            iconList: [],
            recommendList: [],
            swiperList: [],
            weekendList: [],
        }
    },    
    components: {   // 注册局部组件
        HomeHeader, // 头部
        HomeSwiper, // 轮播
        HomeNav, // 导航
        HomeFavorite, // 猜你喜欢
        HomeWeekend, // 周末去哪
    },
    methods: {
        /* 
            为什么在methods中定义获取数据的方法，而不是在created函数中直接使用getHome函数呢？
                1、因为生命周期函数最好不要写过多的代码，我们可以在created函数中执行，同样可以实现功能
                2、复用性不高，在methods中定义的函数，还可以在其他地方使用

        */
        async getData(){
            let {iconList, recommendList, swiperList, weekendList} = await getHome();

            this.iconList = iconList
            this.recommendList = recommendList
            this.swiperList = swiperList
            this.weekendList = weekendList
        }
    },
    // created(){
    //     // console.log('created 触发了')
    //     this.getData()
    // },
    mounted(){
        // console.log('mounted 触发了')
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            bounceTime: 300
        })
    },
    activated(){ // 页面展示时触发
        // console.log('home 激活了')
        this.getData()
    },
    deactivated(){ // 页面没有展示时触发
        // console.log('home 失活了')
    }
}
</script>

<style lang='stylus' scoped>
    .container
        position fixed
        overflow hidden
        top .88rem
        left 0
        right 0
        bottom 0 
</style>