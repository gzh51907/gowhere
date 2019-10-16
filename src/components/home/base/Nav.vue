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
                    el: '.swiper-pagination'
                }
            },
            imgListdata: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc: '景点门票'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    desc: '广州必游'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                    desc: '动植物园'
                },
                {
                    id: '0004',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                    desc: '自然风光'
                },
                {
                    id: '0005',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    desc: '一日游'
                },
                {
                    id: '0006',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                    desc: '水上乐园'
                },
                {
                    id: '0007',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                    desc: '亲子游'
                },
                {
                    id: '0008',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
                    desc: '长隆度假区'
                },
                {
                    id: '0009',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
                    desc: '广州塔'
                },
                {
                    id: '0010',
                    imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
                    desc: '广州融创'
                },
            ]
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