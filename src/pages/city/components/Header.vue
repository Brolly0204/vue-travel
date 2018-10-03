<template>
  <div class="header">
    <router-link to="/" tag="div">
      城市选择
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size 32px
  color #fff
  background $bgColor
  overflow hidden
  &-back
    position absolute
    left 0
    top 0
    width 64px
    text-align center
    font-size 40px
</style>
