<template>
  <div class="count">
    <app-text tag="p" :text="`${booksCount}冊`" font-s />
  </div>
</template>

<script>
import { Text } from '@Public/components/Atoms';

export default {
  components: {
    appText: Text,
  },
  inheritAttrs: false,
  props: {
    booksCount: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.count {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1% 2%;
  border: solid 1px var(--lightGray);
  border-top: none;
}
</style>
