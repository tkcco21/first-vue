<template lang="html">
  <section>
    <app-page-title title="読んだ本たち" text="※ 本の画像部分のリンクはすべてアフィリエイトリンクになっています。" />

    <ul class="book-list">
      <app-yearly-books
        v-for="(yearly, yearIndex) in bookList"
        :key="yearIndex"
        :yearly="yearly"
        :yearly-books-count="yearlyNumberOfBooks"
      />
    </ul>
  </section>
</template>

<script>
import { PageTitle } from '@Public/components/Molecules';
import { YearlyBooks } from '@Public/components/Organisms';

export default {
  components: {
    appPageTitle: PageTitle,
    appYearlyBooks: YearlyBooks,
  },
  computed: {
    bookList() {
      return this.$store.state.bookList;
    },
    yearlyNumberOfBooks() {
      return this.$store.getters.yearlyNumberOfBooks;
    },
  },
  created() {
    this.$store.dispatch('getAllBooks');
  },
};
</script>

<style lang="postcss" scoped>
.book-list {
  margin-top: 20px;
}
</style>
