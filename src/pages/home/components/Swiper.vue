<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt="slide1">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    swiperList: {
      type: Array
    }
  },
  computed: {
    showSwiper() {
      return this.swiperList.length
    }
  },
  created() {
    this.swiperOption = {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff
.wrapper
  width 100%
  height 31.25vw
  background #eeeeee
  // height 0
  // overflow hidden
  // padding-bottom 26.66%
  .swiper-img
    width 100%
</style>
