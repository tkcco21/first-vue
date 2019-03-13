<template>
  <p :class="textClass">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    textClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  line-height: 1.2;
}
</style>
