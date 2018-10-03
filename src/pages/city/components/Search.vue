<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.search
  height 72px
  padding 0 10px
  box-sizing border-box
  background $bgColor
  &-input
    box-sizing border-box
    width 100%
    height 62px
    padding 0 10px
    line-height 62px
    text-align center
    border-radius 6px
    color #666666
    outline none
    border none
</style>
