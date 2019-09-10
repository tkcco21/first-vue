<template>
  <div class="count">
    <p>{{ booksCount }}冊</p>
    <button @click="$emit('toggleCount')">
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
    margin-left: 20px;
    font-size: 14px;
  }
}
</style>
