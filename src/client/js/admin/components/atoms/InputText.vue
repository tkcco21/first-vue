<template lang="html">
  <div class="inputText">
    <p class="label">{{ label }}</p>
    <input
      :class="['input', className]"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      :value="inputValue"
      @input="updateValue"
    >
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Label',
    },
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
  methods: {
    updateValue($event) {
      this.$emit('updateValue', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  font-size: 18px;
}
.input {
  padding: 10px;
  width: 100%;
  font-size: 18px;
}

.signin-input,
.books-input {
  border-bottom: 1px solid #ccc;
  transition: all .5s;
  background-color: #f8f8f8;
  &:focus {
    border-bottom-color: #00a381;
  }
}
</style>
