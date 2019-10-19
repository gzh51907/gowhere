<template>
    <div class="nav">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(imgs, index) in filterImgs" :key="index">
                <div class="item" v-for="item in imgs" :key="item.id">
                    <img class="item-img" :src="item.imgUrl" alt="">
                    <span class="item-desc">{{item.desc}}</span>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeNav',
    props: ['imgList'],
    data(){
        return  {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    computed: {
        filterImgs(){   // 定义一个计算属性，将imgList数组 转化成一个二维数组， 并且二维数组的每一项都只有8个数据
            let imgs = [];
            this.imgList.forEach( (value, index) => {
                let page = ~~(index / 8);
                if(!imgs[page]){
                    imgs[page] = []
                }
                imgs[page].push(value)
            })

            return imgs
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper-slide
        display flex
        flex-wrap wrap
        height 3.7rem

        .item
            display flex
            flex-direction column
            align-items center
            width 25%
            height 1.6rem
            padding-top .1rem

            .item-img
                width 1.1rem
                
    .swiper-pagination
        bottom 0   

    .swiper-pagination >>> .swiper-pagination-bullet
            width .12rem
            height .12rem
             


                    

</style>