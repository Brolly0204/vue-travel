<template>
  <div class="header">
    <div class="header-back">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link class="header-city" to="/city" tag="div">
      {{city}}
      <span class="iconfont arrow">&#xe64a;</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  display flex
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  color #ffffff
  &-back
    width 64px
    text-align center
  &-search
    flex 1
    height 62px
    line-height 62px
    padding-left 20px
    margin 12px 0 0 20px
    background-color #ffffff
    border-radius 10px
    color #ccc
  &-city
    min-width 124px
    text-align center
    box-sizing border-box
    padding 0 10px
    .arrow
      font-size 20px
</style>
