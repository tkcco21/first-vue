<template lang="html">
  <div class="inputText">
    <p class="inputText-label">{{ label }}</p>
    <input
      :class="['inputText-input', className]"
      :type="inputType"
      :name="name"
      value=""
    >
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: 'className',
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
  },
};
</script>

<style lang="scss" scoped>
.inputText {
  &-label {
    font-size: 20px;
  }
  &-input {
    padding: 15px;
    width: 100%;
    font-size: 20px;
    border: 1px solid #ccc;
  }
}
</style>
