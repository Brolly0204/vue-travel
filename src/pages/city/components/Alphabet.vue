<template>
  <div class="alphabet">
    <div
      class="item"
      v-for="letter of letterList"
      :key="letter"
    >{{letter}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letterList() {
      return Object.keys(this.cities)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variables.styl"
.alphabet
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 158px
  right 0
  bottom 0
  width 40px
  .item
    height 40px
    line-height 40px
    text-align center
    color $bgColor
</style>
