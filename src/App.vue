<template>
  <div id="app">
    <HomeHeader/>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from '../src/components/HomeHeader'
export default {
  name: 'App',
  components:{
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>
</style>
