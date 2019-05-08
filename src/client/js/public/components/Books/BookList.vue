<template lang="html">
  <ul class="book-list">
    <li
      v-for="book in books[date]"
      :key="book.id"
    >
      <a :href="book.item_url">
        <img :src="book.image_url" :alt="book.title">
        <p>{{ book.title }}</p>
        <p>{{ book.description }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: '1975-01',
    },
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
