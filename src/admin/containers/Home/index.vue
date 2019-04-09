<template lang="html">
  <div class="">
    <p>This is Home</p>
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
</style>
