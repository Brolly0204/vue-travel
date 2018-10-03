<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  data() {
    return {
      msg: 'shopping mall',
      locationIcon: require('./images/location.png')
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
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
