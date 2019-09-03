<template>
  <div id="app">
    <input v-model="nums">
    <router-view v-for="i in getNum(nums)" v-bind:key="i" v-bind:index="i"/>
    <span>Sum:{{$store.getters.getCounterSum()}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getNum: function (e) {
      let temp = 0
      let reg = /^[0-9]\d*$/
      if (!reg.test(e)) {
        return temp
      }
      temp = parseInt(e)
      return temp
    },
    count: function (e) {
      this.sum = this.sum + e
    }
  },
  data () {
    return {
      nums: 0
    }
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
