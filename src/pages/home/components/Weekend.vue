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
          <img class="item-img" :src="item.imgSrc" :alt="item.title">
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
  data() {
    return {
      weekendList: [
        {
          id: '01',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '02',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '03',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '04',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '05',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .weekend
    &-title
      margin-top 20px
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
