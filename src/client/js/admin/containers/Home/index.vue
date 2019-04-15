<template lang="html">
  <div class="">
    <h1>Home画面</h1>
    <button type="button" @click="increments">BUTTON</button>
    <p>{{ counter }}</p>
    <p>{{ doubleCounter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    },
  },
  methods: {
    increments() {
      this.$store.dispatch('increments');
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
