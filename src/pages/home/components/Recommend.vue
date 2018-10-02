<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul class="recommend-content">
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgSrc" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <span class="item-button">查看详情</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '01',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201406/10/fb5c812fa38f2b188ee3001f033ce926.jpg_200x200_70e4cc63.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '02',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201406/10/fb5c812fa38f2b188ee3001f033ce926.jpg_200x200_70e4cc63.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '03',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201406/10/fb5c812fa38f2b188ee3001f033ce926.jpg_200x200_70e4cc63.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '04',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201406/10/fb5c812fa38f2b188ee3001f033ce926.jpg_200x200_70e4cc63.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '05',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201406/10/fb5c812fa38f2b188ee3001f033ce926.jpg_200x200_70e4cc63.jpg',
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
.recommend
  &-title
    margin-top 20px
    line-height 80px
    text-indent 20px
    background #eee
  &-content
    .item
      display flex
      height 190px
      overflow hidden
      .item-img
        width 170px
        height 170px
        padding 10px
      .item-info
        flex 1
        padding 10px
        min-width 0
        .item-title
          line-height 54px
          font-size 32px
          ellipsis()
        .item-desc
          line-height 40px
          color #ccc
          ellipsis()
        .item-button
          display inline-block
          background #ff9300
          margin-top 16px
          padding 0 20px
          border-radius 6px
          line-height 44px
          color #fff
</style>
