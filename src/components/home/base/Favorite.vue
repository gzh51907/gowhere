<template>
    <div class="favorite">
        <div class="fav-title">
            <img class="fav-logo" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <span>猜你喜欢</span>
        </div>
        <ul class="fav-list">
            <li class="fav-item clearfix" v-for="item in dataList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-tag">随买随用</div>
                <div class="item-info">
                    <div class="fav-item-title">{{item.title}}</div>
                    <div class="fav-item-comment">
                        <span class="fav-comment-star">
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                        </span>
                        <span class="fav-comment-num"><span>{{item.count}}</span>条评论</span>
                    </div>
                    <div class="fav-price">
                        <span class="fav-item-price">
                            ￥
                            <em>{{item.price}}</em>
                        </span>起
                        <span class="fav-item-address">{{item.address}}</span>
                    </div>
                    <div class="fav-item-feature" v-show="item.isShow">
                        <div class="item-feature-con">{{item.feature}}</div>
                    </div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return  {
            dataList: [
                {
                    id: '0001',
                    isShow: true,
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_200x200_ea09ee17.jpg',
                    title: '岭南印象园',
                    count: '14938',
                    price: '52.4',
                    address: '天河区',
                    feature: '爱挑战的你怎能错过垂直过山车'
                },
                {
                    id: '0002',
                    isShow: false,
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/a7/a7a27bee3b873209a3.img.jpg_200x200_567a96e7.jpg',
                    title: '广州融创乐园',
                    count: '4490',
                    price: '77',
                    address: '广州',
                },
                {
                    id: '0003',
                    isShow: true,
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1910/58/58de0e390e943875a3.img.jpg_200x200_b34283bb.jpg',
                    title: '长隆野生动物世界',
                    count: '126669',
                    price: '272',
                    address: '广州长隆...',
                    feature: '熊猫三胞胎与您共享欢乐时光'
                },
                {
                    id: '0004',
                    isShow: true,
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_200x200_ea09ee17.jpg',
                    title: '岭南印象园',
                    count: '14938',
                    price: '52.4',
                    address: '天河区',
                    feature: '爱挑战的你怎能错过垂直过山车'
                },
                {
                    id: '0005',
                    isShow: false,
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/a7/a7a27bee3b873209a3.img.jpg_200x200_567a96e7.jpg',
                    title: '广州融创乐园',
                    count: '4490',
                    price: '77',
                    address: '广州',
                },
                {
                    id: '0006',
                    isShow: true,
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1910/58/58de0e390e943875a3.img.jpg_200x200_b34283bb.jpg',
                    title: '长隆野生动物世界',
                    count: '126669',
                    price: '272',
                    address: '广州长隆...',
                    feature: '熊猫三胞胎与您共享欢乐时光'
                },
            ]
        }
    }
}
</script>

<style lang='stylus' scoped>
.clearfix:after{
    display block
    content ""
    clear botn
}
.favorite
    padding .24rem 0 .26rem 0

    .fav-logo
        display: inline-block;
        overflow: hidden;
        width: .3rem;
        height: .3rem;
        margin-left: .2rem;
        vertical-align: top;

    .fav-title
        display: inline-block;
        margin-left: .08rem;
        height: .44rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;

.fav-list
    margin-left .24rem;

    .fav-item
        position relative
        padding .2rem 0

        .item-img
            float left 
            width 2rem
            height 2rem
        .item-tag
            position absolute
            top .2rem
            left 0
            width 1.02rem
            height .38rem
            background url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png) no-repeat 100%
            color #ffffff
            font-size .2rem
            line-height .38rem
            text-indent .04rem

        .item-info
            float left 
            width 5rem
            padding-left .22rem

            .fav-item-title
                margin-top .26rem
                height .44rem
                color #212121
                font-size .32rem
                line-height .44rem            
                overflow hidden
                width 100%
                white-space nowrap
                text-overflow ellipsis

            .fav-item-comment
                margin-top: .14rem;
                height: .34rem;

                .fav-comment-star
                    display inline-block
                    width 1.5rem
                    font-size 0
                    vertical-align top
                    
                    i 
                        z-index 2
                        color #ffb436
                        font-size  .28rem


                .fav-comment-num
                    color: #616161;
                    font-size: .24rem;
                    line-height: .34rem;
                    vertical-align: text-bottom;

            
            .fav-price
                position relative
                margin-top .22rem
                color #616161
                font-size .24rem
                line-height .4rem

                .fav-item-price
                    color #ff8300
                    font-size .24rem
                    line-height .4rem

                    em
                        font-size .4rem

                .fav-item-address
                    position absolute
                    right: .24rem
                    bottom: 0


            .fav-item-feature   
                margin-top .48rem
                margin-right .24rem
                background #fff9f9
                padding .04rem .1rem
                color #f55
                font-size .24rem
                line-height .34rem
</style>