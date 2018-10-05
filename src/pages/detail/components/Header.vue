<template>
  <div class="header">
    <div class="header-abs" @click.stop="handleBackClick">
      <span class="iconfont icon">&#xe624;</span>
    </div>
    <div
      class="header-fixed"
      v-show="showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/" tag="div">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleBackClick() {
      this.$router.push('/')
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 40) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = true
      } else {
        this.showAbs = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.header
  &-abs
    position absolute
    left 20px
    top 20px
    width 80px
    height 80px
    line-height 80px
    text-align center
    border-radius 40px
    background rgba(0, 0, 0, .8)
    .icon
      color #fff
      font-size 40px
  &-fixed
    position fixed
    top 0
    left 0
    right 0
    width 100%
    height $headerHeight
    line-height $headerHeight
    text-align center
    font-size 32px
    color #fff
    background $bgColor
    overflow hidden
    z-index 2
    .header-back
      position absolute
      left 0
      top 0
      width 64px
      text-align center
      font-size 40px
</style>
