<template>
  <textarea
    :name="textareaName"
    :rows="textareaRows"
    :placeholder="textareaPlaceholder"
    :value="textareaValue"
  />
</template>

<script>
export default {
  props: {
    textareaRows: {
      type: String,
      default: '3'
    },
    textareaName: {
      type: String,
      default: 'title'
    },
    textareaPlaceholder: {
      type: String,
      default: 'タイトルを記入してください'
    },
    textareaValue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  padding: 10px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #ddd;
}
</style>
