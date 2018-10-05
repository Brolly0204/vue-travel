<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-content" ref="content" v-show="keyword">
    <ul v-if="list.length">
      <li
        class="search-content-item border-bottom"
        v-for="item in list"
        :key="item.id"
      >{{item.name}}</li>
    </ul>
    <ul v-else>
      <li class="search-content-item border-bottom">
        未找到匹配数据
      </li>
    </ul>
    <div></div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      this.timer && clearTimeout(this.timer)
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let key in this.cities) {
          this.cities[key].forEach(item => {
            if ((item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1)) {
              result.push(item)
            }
          })
        }
        this.list = [...result]
      }, 100)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.content)
  }
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
.search-content
  position absolute
  top 158px
  left 0
  right 0
  bottom 0
  overflow hidden
  z-index 9
  background #eeeeee
  &-item
    line-height 62px
    padding-left: 20px
    color #666
    background-color #fff
</style>
