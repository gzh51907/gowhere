<template>
    <div class="detail">
        <detail-banner :gallaryImgs="gallaryImgs" :sightName="sightName" :bannerImg="bannerImg"></detail-banner>
        <detail-header></detail-header>
        <detail-card :cardInfo="cardInfo"></detail-card>
        <detail-recommend :recommendInfo="recommendInfo">
            <h3 class="border-bottom">去哪儿推荐</h3>
        </detail-recommend>
        <detail-calender :calendarInfo="calendarInfo"></detail-calender>
        <detail-comment :commentInfo="commentInfo"></detail-comment>
    </div>
</template>

<script>
import DetailBanner from './base/Banner'
import DetailHeader from './base/Header'
import DetailCard from './base/Card'
import DetailRecommend from './base/Recommend'
import DetailCalender from './base/Calender'
import DetailComment from './base/Comment'

// 导入获取详情页数据的接口
import { getDetails } from '@/api'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailCard,
        DetailRecommend,
        DetailCalender,
        DetailComment
    },
    data(){
        return  {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            cardInfo: {},
            recommendInfo: [],
            calendarInfo: [],
            commentInfo: []
        }
    },
    methods: {
        async getData(id){
            let data = await getDetails(id)
            console.log(data)
            let { sightName, bannerImg, gallaryImgs, cardInfo, recommendInfo, calendarInfo, commentInfo } =  await getDetails(id)
            this.sightName = sightName
            this.bannerImg = bannerImg
            this.gallaryImgs = gallaryImgs
            this.cardInfo = cardInfo
            this.recommendInfo = recommendInfo
            this.calendarInfo = calendarInfo
            this.commentInfo = commentInfo
        }
    },
    activated(){
        // console.log(this.$route.params.id)
        this.getData(this.$route.params.id)
    }
}
</script>

<style lang="stylus" scoped>
</style>