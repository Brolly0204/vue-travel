<template>
  <div class="city">
    <div ref="header">
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
    </div>
    <city-list
      :cities="cities"
      :hot-cities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
      :headerHeight="headerHeight"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      headerHeight: 0
    }
  },
  methods: {
    getCityList() {
      this.$api.getCityList().then(this.handleCityList)
    },
    handleCityList(res) {
      let result = res.data
      if (result.ret && result.data) {
        let {
          cities,
          hotCities
        } = result.data
        this.cities = cities
        this.hotCities = hotCities
      }
    },
    handleLetterChange(letter) {
      this.letter = letter
    }
  },
  mounted() {
    this.getCityList()
    // 获取header search 高度
    this.headerHeight = this.$refs.header.offsetHeight
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>
</style>
