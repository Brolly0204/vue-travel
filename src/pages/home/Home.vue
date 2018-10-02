<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    test
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  data() {
    return {
      msg: 'shopping mall',
      locationIcon: require('./images/location.png')
    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped lang="stylus">
.shop-mall {
  &-search-bar {
    height: 1.1rem;
    background-color: #e5017d;
    line-height: 1.1rem;
  }
}
</style>
