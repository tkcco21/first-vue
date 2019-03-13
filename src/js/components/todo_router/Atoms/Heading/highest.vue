<template>
  <h1 :class="headingClass">
    {{ headingText }}
  </h1>
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
h1 {
  font-weight: bold;
  font-size: 24px;
  line-height: 1.2;
}
</style>
