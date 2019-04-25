<template lang="html">
  <section class="books">
    <atoms-heading :level="1">Books</atoms-heading>
    <mole-book-form />

    <!-- リストは後で直す -->
    <ul>
      <li v-for="book in books" :key="books.id">
        <a :href="book.item_url" target="_blank">
          <h2>{{ book.title }}</h2>
          <img :src="book.image_url" alt="">
          <p>{{ book.description }}</p>
          <p>{{ book.completed_at }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { Heading } from '@Admin/components/atoms';
import { BookForm } from '@Admin/components/molecules';

export default {
  components: {
    atomsHeading: Heading,
    moleBookForm: BookForm,
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  created() {
    console.log(this.$store.state.books.length);
    if (!this.$store.state.books.length) {
      this.$store.dispatch('getBooks');
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
