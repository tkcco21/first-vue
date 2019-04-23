<template lang="html">
  <textarea
    :class="classes"
    :name="name"
    value=""
    rows="8"
    :placeholder="placeholder"
    :value="inputValue"
    @input="updateValue"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Name',
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
        textarea: true,
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
.textarea {
  padding: 10px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #ccc;
  transition: all .5s;
  background-color: $superLightGray;
  &:focus {
    border-color: $keycolor;
  }
}
</style>
