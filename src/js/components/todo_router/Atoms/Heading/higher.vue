<template>
  <h2 :class="headingClass">
    {{ headingText }}
  </h2>
</template>

<script>
export default {
  props: {
    headingClass: {
      type: String,
      default: 'title'
    },
    headingText: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 1.2;
}
</style>
