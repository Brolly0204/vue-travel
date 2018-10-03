<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot-cities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      hotCities: []
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
    }
  },
  mounted() {
    this.getCityList()
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
