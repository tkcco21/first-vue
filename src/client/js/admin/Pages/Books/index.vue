<template lang="html">
  <div class="sample">
    <h1>Books</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    sample: {
      get() {
        return this.$store.state.sample;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      },
    },
  },
  created() {
    this.$store.dispatch('getBooks');
  },
};
</script>

<style lang="scss" scoped>
.sample {
  padding: 30px;
  text-align: center;
  input {
    padding: 10px;
    width: 80%;
    border: 2px solid #ccc;
  }
}
</style>
