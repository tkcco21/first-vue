<template>
  <div class="count">
    <app-text tag="p" :text="`${booksCount}冊`" font-s />
    <app-button
      type="button"
      :text="`読んだ本を${ show ? '非表示' : '表示' }`"
      font-s
      key-color
      underline
      :class="[show && 'is-show', 'count__button']"
      @click="$emit('toggleCount')"
    />
  </div>
</template>

<script>
import { Button, Text } from '@Public/components/Atoms';

export default {
  components: {
    appButton: Button,
    appText: Text,
  },
  props: {
    booksCount: {
      type: Number,
      required: true,
    },
    show: {
      type: Boolean,
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
  &__button {
    margin-left: 20px;
    transition: .5s;
    &.is-show {
      color: var(--darkGray);
    }
  }
}
</style>
