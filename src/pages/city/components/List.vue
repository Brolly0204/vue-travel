<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="list-area">
        <div class="list-area-title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="list-area">
        <div class="list-area-title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="list-area"
        v-for="(list, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="list-area-title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="item of list"
            :key="item.id"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc

  .list
    position absolute
    top 158px
    bottom 0
    right 0
    left 0
    overflow hidden
    &-area
      &-title
        line-height 54px
        background #eee
        padding-left 20px
        font-size 26px
      .button-list
        padding 10px 60px 10px 10px
        overflow hidden
        .button-wrapper
          float left
          width 33.33%
          .button
            margin 10px
            padding 10px 0
            text-align center
            border 2px solid #ccc
            border-radius 6px
      .item-list
        line-height 76px
        color #666
        padding-left 20px
</style>
