<template lang="html">
  <input
    :class="classes"
    :type="inputType"
    :name="name"
    :placeholder="placeholder"
    :value="inputValue"
    @input="updateValue"
  >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        input: true,
      };
    },
  },
  methods: {
    updateValue($event) {
      this.$emit('updateValue', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  padding: 10px;
  width: 100%;
  font-size: 18px;
  background-color: $superLightGray;
  border-bottom: 1px solid #ccc;
  transition: all .5s;
  &:focus {
    border-bottom-color: $keycolor;
  }
}
</style>
