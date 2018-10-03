<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    iconList: Array
  },
  created() {
    this.swiperOption = {}
  },
  computed: {
    pages() {
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.icons
  margin-top 10px
  /deep/ .swiper-container
    width 100%
    height 0
    padding-bottom 50%
    overflow hidden
  .icon
    float left
    position relative
    width 25%
    height 0
    padding-bottom 25%

    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 44px
      padding 10px
      box-sizing border-box
      overflow hidden

      .icon-img-content
        display block
        height 100%
        margin 0 auto
        overflow hidden

    .icon-desc
      width 100%
      position absolute
      left 0
      bottom 0
      font-size 28px
      line-height 44px
      text-align center
      color $darkTextColor
      ellipsis()
</style>
