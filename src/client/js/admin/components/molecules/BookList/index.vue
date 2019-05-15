<template lang="html">
  <div class="book__list">
    <h2>{{ date }}</h2>
    <ul class="book__list__group">
      <li v-for="book in books[date]" :key="book.id">
        <a :href="book.item_url" target="_blank">
          <img :src="[book.image_url || 'https://placehold.jp/231x335.png?text=画像未登録']" alt="">
          <h3>{{ book.title }}</h3>
          <p>{{ book.description }}</p>
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

<style lang="css" scoped>
.book__list {
  &__group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    & > li {
      width: 32%;
      max-width: 350px;
    }
  }
}
</style>
