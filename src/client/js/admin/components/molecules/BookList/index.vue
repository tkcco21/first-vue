<template lang="html">
  <div class="book__list">
    <atoms-heading :level="2">{{ date }}</atoms-heading>
    <ul class="book__list__group">
      <li v-for="book in books[date]" :key="book.id">
        <a :href="book.item_url" target="_blank">
          <img :src="[book.image_url || 'https://placehold.jp/231x335.png?text=画像未登録']" alt="">
          <atoms-heading :level="3">{{ book.title }}</atoms-heading>
          <atoms-text>{{ book.description }}</atoms-text>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import { Heading, Text } from '@Admin/components/atoms';

export default {
  components: {
    atomsHeading: Heading,
    atomsText: Text,
  },
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
