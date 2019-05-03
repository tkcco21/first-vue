<template lang="html">
  <div>
    <atoms-heading :level="2">{{ date }}</atoms-heading>
    <ul>
      <li v-for="book in books[date]" :key="book.id">
        <a :href="book.item_url" target="_blank">
          <h2>{{ book.title }}</h2>
          <img :src="book.image_url" alt="">
          <p>{{ book.description }}</p>
          <p>{{ book.completed_at }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    date: {
      type: String,
      default: moment().format('YYYY-MM-DD'),
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
