<template lang="html">
  <section class="books">
    <atoms-heading :level="1">Books</atoms-heading>
    <mole-book-form />

    <!-- リストは後で直す -->
    <ul>
      <li v-for="book in books" :key="books.id">
        <p>{{ book.item_url }}</p>
        <p>{{ book.description }}</p>
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
    this.$store.dispatch('getBooks');
  },
};
</script>

<style lang="scss" scoped>
</style>
