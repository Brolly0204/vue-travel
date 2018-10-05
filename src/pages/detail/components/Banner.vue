<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="title">{{sightName}}</div>
        <div class="number"><span class="iconfont icon">&#xe616;</span>{{gellaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :imgs="gellaryImgs"
        v-show="showGallery"
        @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gellaryImgs: Array
  },
  data() {
    return {
      showGallery: false
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
    CommonGallery,
    FadeAnimation
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
          margin-right 10px
</style>
