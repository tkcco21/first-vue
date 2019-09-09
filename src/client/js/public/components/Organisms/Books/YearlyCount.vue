<template>
  <div class="count">
    <p>{{ booksCount }}冊</p>
    <button @click="$emit('toggleCount')">
      読んだ本を表示する
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
  },
};
</script>

<style lang="postcss" scoped>
.count {
  padding: 1% 2%;
  p {
    font-size: 16px;
  }
}
</style>
