<template>
  <div class="list">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="list-item-title border-bottom">
        <span class="icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="list-item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.list
  &-item
    &-title
      line-height 80px
      font-size 32px
      padding 0 20px

      .icon
        position relative
        left 10px
        top 6px
        display inline-block
        width 36px
        height 36px
        background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -45px no-repeat
        margin-right 10px
        background-size 40px 300px

    &-children
      padding 0 20px
</style>
