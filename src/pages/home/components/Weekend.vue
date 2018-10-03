<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul class="weekend-content">
      <li
        class="item"
        v-for="item of weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .weekend
    &-title
      line-height 80px
      text-indent 20px
      background #eee
    &-content
      .item
        overflow hidden
        margin-bottom 10px
        .item-img-wrapper
          height 0
          padding-bottom 33.4%
          overflow hidden
          .item-img
            width 100%
        .item-info
          padding 10px
          min-width 0
          .item-title
            line-height 54px
            font-size 28px
            color #212121
            ellipsis()
          .item-desc
            line-height 40px
            font-size 24px
            color #616161
            ellipsis()
</style>
