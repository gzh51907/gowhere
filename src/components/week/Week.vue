<template>
    <div>
        <week-header></week-header>
        <week-list :weekInfo="weekInfo"></week-list>
    </div>
</template>

<script>
import { getWeeks } from "@/api"

import WeekHeader from './base/Header'
import WeekList from './base/List'


export default {
    name: 'Week',
    components: {
        WeekHeader,
        WeekList
    },
    data(){
        return {
            weekInfo: []
        }
    },
    methods: {
        async getData(){
            let { weekInfo } = await getWeeks(this.$route.params.id)
            this.weekInfo = weekInfo
        }
    },
    activated(){
        this.getData()
    }

}
</script>

<style lang="stylus" scoped>

</style>