<template>
  <div class="alphabet">
    <div
      :class="{
        item: true,
        active: index === ind
      }"
      v-for="(letter, ind) of letters"
      :key="letter"
      :ref="letter"
      @touchstart.stop.prevent="handleTouchStart"
      @touchmove.stop.prevent="handleTouchMove"
      @touchend.stop.prevent="handleTouchEnd"
      @click="handelLetter"
    >{{letter}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
    headerHeight: Number
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      height: 0,
      timer: null,
      index: 0
    }
  },
  computed: {
    letters() {
      return Object.keys(this.cities)
    }
  },
  updated() {
    let alpha = this.$refs['A'][0]
    this.height = alpha.offsetHeight
    this.startY = alpha.offsetTop
  },
  methods: {
    handelLetter(e) {
      // this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        this.computedLetter(e.touches)
      }
    },
    handleTouchEnd(e) {
      if (this.touchStatus) {
        this.computedLetter(e.changedTouches)
      }
      this.touchStatus = false
    },
    computedLetter(touches) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const touchY = touches[0].clientY - this.headerHeight
        const index = Math.floor((touchY - this.startY) / this.height)
        if (index >= 0 && index < this.letters.length) {
          this.index = index
          this.$emit('change', this.letters[index])
        }
      }, 18)
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
    &.active
      color red
</style>
