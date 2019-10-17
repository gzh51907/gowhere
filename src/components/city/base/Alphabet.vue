<template>
    <div class="alphabet">
        <ul>
            <li v-for="(city, key) in cities" :key="key" @click="handleClick(key)">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['cities'],
    name: 'CityAlphabet',
    methods: {
        // 点击一次，就把点击的字母存储到vuex中，这样在List组件中可以拿到点击的字母
        handleClick(letter){
            // console.log(letter)
            this.$store.commit('changeLetter', letter)
        }
    }
}
</script>

<style lang='stylus' scoped>
    .alphabet
        position fixed
        display flex
        flex-direction column
        justify-content center
        top 1.58rem
        right 0
        bottom 0
        width:.4rem

        li
            line-height .5rem
            text-align center
            color #22aecf
            font-weight 600

</style>