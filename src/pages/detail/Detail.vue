<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gellaryImgs="gellaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      categoryList: [],
      gellaryImgs: []
    }
  },
  methods: {
    getDetailInfo() {
      this.$api.getDetailInfo({id: this.$route.params.id}).then(this.handleResData)
    },
    handleResData(res) {
      let result = res.data
      if (result.ret && result.data) {
        let {
          sightName,
          bannerImg,
          categoryList,
          gellaryImgs
        } = result.data
        this.sightName = sightName
        this.bannerImg = bannerImg
        this.categoryList = categoryList
        this.gellaryImgs = gellaryImgs
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 1500px
</style>
