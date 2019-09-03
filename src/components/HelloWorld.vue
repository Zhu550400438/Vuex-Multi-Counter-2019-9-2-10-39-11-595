<template>
  <div>
    <span>{{index}}.</span>
    <button @click="add">+</button>
    <span>{{$store.getters.getCounterByIndex(index - 1)}}</span>
    <button @click="reduce">-</button>
  </div>
</template>
<script>
export default {
  props: {
    index: Number
  },
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  created: function () {
    this.$store.commit('change', this.index - 1)
  },
  destroyed: function () {
    this.$store.commit('change', this.index - 1)
  },
  methods: {
    add: function () {
      this.$store.commit('add', this.index - 1)
    },
    reduce: function () {
      this.$store.commit('reduce', this.index - 1)
    }
  }
}
</script>
