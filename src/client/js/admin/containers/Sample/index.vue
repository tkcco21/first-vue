<template lang="html">
  <div class="sample">
    <h1>Sample</h1>
    <input
      type="text"
      name="sampleName"
      v-model="sample"
      placeholder="sample"
    >
    <div>
      <button
        type="button"
        name="sampleButton"
        @click="submitSample"
      >
        SUBMIT
      </button>
    </div>
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
  methods: {
    submitSample() {
      this.$store.dispatch('submitSample');
    },
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
  button {
    margin-top: 20px;
    padding: 10px 30px;
    color: #fff;
    background-color: #e47f39;
  }
}
</style>
