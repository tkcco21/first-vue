<template lang="html">
  <p :class="classes"><slot /></p>
</template>

<script>
export default {
  props: {},
  computed: {
    classes() {
      return {
        text: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 16px;
}
</style>
