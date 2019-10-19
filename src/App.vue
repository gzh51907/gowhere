<template>
  <div id="app">
    <!-- 
      keep-alive 的作用：
        当我们不断切换城市的时候，每次都会重新发送请求，可以在network中查看到index.json和city.json被请求了多次，所以我们应该从缓存中读取数据，在理论上已经缓存的生命周期函数是都不会执行的，

        该项目的需求是，切换不同城市，就应该显示对应城市的数据，由于keep-alive导致生命周期函数无法重新执行，无法获取城市对应的数据
        
        在本案例中，也就是说city、home组件一旦被缓存，就不会重新执行生命周期函数，切换城市后，不会显示对应城市的数据，解决方案：
        
            生命周期函数：
              activated()   缓存时执行，和keep-alive配套使用 当页面展示时触发，
              deactivated() 当页面没有展示时触发
     -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
