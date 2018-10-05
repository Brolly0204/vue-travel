<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiper-list="swiperList"></home-swiper>
    <home-icons :icon-list="iconList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      locationIcon: require('./images/location.png')
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapActions(['changeCity']),
    getHomeData() {
      this.$api.getHomeData({city: this.city}).then(res => {
        let result = res.data
        if (result.ret && result.data) {
          let {
            city,
            swiperList,
            iconList,
            recommendList,
            weekendList
          } = result.data
          try {
            if (localStorage.city) {
              city = localStorage.city
            }
          } catch (e) {}
          this.changeCity(city)
          this.swiperList = swiperList
          this.iconList = iconList
          this.recommendList = recommendList
          this.weekendList = weekendList
        }
      })
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeData()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
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
