<template lang="html">
  <header class="header">
    <div class="header__inner">
      <atoms-heading :level="1" class-name="header__title">
        First Vue
      </atoms-heading>
    </div>
  </header>
</template>

<script>
import { Heading } from '@Public/components/atoms';

export default {
  components: {
    atomsHeading: Heading,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 0 20px;
  &__inner {
    text-align: center;
  }
}
</style>
