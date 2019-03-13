<template>
  <input
    :type="inputType"
    :name="inputName"
    :placeholder="inputPlaceholder"
    :value="inputValue"
  >
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    inputName: {
      type: String,
      default: 'title'
    },
    inputPlaceholder: {
      type: String,
      default: 'タイトルを記入してください。'
    },
    inputValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  padding: 10px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ddd;
}
</style>
