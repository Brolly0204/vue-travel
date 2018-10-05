<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close')
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    background #000
    z-index 1
    .wrapper
      width 100%
      /deep/ .swiper-container
        overflow inherit
      .gallery-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -100px
</style>
