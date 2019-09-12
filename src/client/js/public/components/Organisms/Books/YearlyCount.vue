<template>
  <div class="count">
    <p>{{ booksCount }}冊</p>
    <button
      :class="show && 'is-show'"
      @click="$emit('toggleCount')"
    >
      読んだ本を{{ show ? '非表示' : '表示' }}
    </button>
  </div>
</template>

<script>
export default {
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
  p {
    font-size: 16px;
  }
  button {
    padding: 3px 5px;
    margin-left: 20px;
    color: var(--keyColor);
    font-size: 14px;
    text-decoration: underline;
    border-radius: 5px;
    transition: .5s;
    &.is-show {
      color: var(--darkGray);
    }
  }
}
</style>
