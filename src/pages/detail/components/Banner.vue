<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1710/7f/7f06f56b02987c66a3.img.jpg_600x330_029cf445.jpg" alt="">
      <div class="banner-info">
        <div class="title">库木塔格沙漠景区</div>
        <div class="number"><span class="iconfont icon">&#xe616;</span> 39</div>
      </div>
    </div>
    <common-gallery
      :imgs="imgs"
      v-show="showGallery"
      @close="handleGalleryClose"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallery: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1605/9d/9d61e856bb6ce93490.img.jpg_r_800x800_4d489cb3.jpg',
        'http://img1.qunarzz.com/sight/p0/1605/9d/9d61e856bb6ce93490.img.jpg_r_800x800_4d489cb3.jpg',
        'http://img1.qunarzz.com/sight/p0/1605/9d/9d61e856bb6ce93490.img.jpg_r_800x800_4d489cb3.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true
    },
    handleGalleryClose() {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    height 0
    padding-bottom 55%
    background-color #eee
    overflow hidden
    &-img
      width 100%
    &-info
      display flex
      align-items center
      position absolute
      right 0
      left 0
      bottom 0
      line-height 60px
      background linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .title
        flex 1
        padding 0 20px
        font-size 32px
        color #fff
      .number
        height 32px
        line-height 32px
        padding 0 35px
        margin-right 20px
        border-radius 20px
        font-size 24px
        color #fff
        background rgba(0, 0, 0, .8)
        .icon
          font-size 17px
</style>
