<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgSrc"
          alt="slide1">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperList: [
        {
          id: '01',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
        },
        {
          id: '02',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1708/f1/ee65a13642c95c02.jpg_750x200_3440fec0.jpg'
        },
        {
          id: '03',
          imgSrc: 'http://img1.qunarzz.com/piao/fusion/1808/b2/7531b9595b2ae302.jpg_750x200_3483eb98.jpg'
        }
      ]
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
  height 26.66vw
  background #eeeeee
  // height 0
  // overflow hidden
  // padding-bottom 26.66%
  .swiper-img
    width 100%
</style>
