<template>
  <div id="app">
    <HomeHeader/>
    <router-view/>
    <AllFooter/>
  </div>
</template>

<script>
import HomeHeader from '../src/components/HomeHeader'
import AllFooter from '../src/components/AllFooter'
export default {
  name: 'App',
  components:{
    HomeHeader,
    AllFooter
  }
}

</script>

<style lang="stylus" scoped>
</style>
