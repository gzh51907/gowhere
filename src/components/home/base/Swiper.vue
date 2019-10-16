<template>
    <div class="swiper">
        <!--<swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length > 0">  v-if="swiperList.length > 0" v-if主要是为了确保无缝轮播loop: true 生效 -->
        <swiper :options="swiperOption" ref="mySwiper" v-if="isShow"><!--  为了简化操作，定义一个计算属性isShow -->
            <!-- slides 图片 -->
            <swiper-slide v-for="swiperImg in swiperList" :key="swiperImg.id">
                <img class="swiper-img" :src="swiperImg.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: ['swiperList'],
    data(){
        return {
            swiperOption: {
                pagination: { el: '.swiper-pagination' },   // 配置分页器，不写会报错
                loop: true,  // 是否轮播
                autoplay: {
                    delay: 2000, // 是否自动轮播
                }
            },
        }
    },
    computed: {
        isShow(){
            return this.swiperList.length > 0
        }
    }

}
</script>


<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet-active
        background: #ffffff;
        
    .swiper
        height 2.18rem

        .swiper-container
            height 100%

            .swiper-img
                width 100%
                height 100%

        
    

</style>