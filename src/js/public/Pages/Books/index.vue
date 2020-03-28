<template lang="html">
  <section>
    <app-page-title title="読んだ本たち" text="※ 本の画像部分のリンクはすべてアフィリエイトリンクになっています。" />

    <Loading v-if="isLoading" />

    <ul class="book-list">
      <app-yearly-books
        v-for="(yearly, yearIndex) in bookList"
        :key="yearIndex"
        :yearly="yearly"
        :yearly-books-count="yearlyNumberOfBooks"
        :shown-year-array="shownYearArray"
        @toggleYear="toggleYear"
      />
    </ul>
  </section>
</template>

<script>
import { Loading } from '@Public/components/Atoms';
import { PageTitle } from '@Public/components/Molecules';
import { YearlyBooks } from '@Public/components/Organisms';

export default {
  components: {
    Loading,
    appPageTitle: PageTitle,
    appYearlyBooks: YearlyBooks,
  },
  data() {
    return {
      shownYearArray: [],
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.generics.isLoading;
    },
    bookList() {
      return this.$store.state.books.bookList;
    },
    yearlyNumberOfBooks() {
      return this.$store.getters['books/yearlyNumberOfBooks'];
    },
  },
  created() {
    this.$store.dispatch('books/getAllBooks');
  },
  methods: {
    toggleYear(targetYear) {
      if (this.shownYearArray.includes(targetYear)) {
        this.shownYearArray = this.shownYearArray.filter(year => year !== targetYear);
      } else {
        this.shownYearArray.push(targetYear);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.book-list {
  margin-top: 20px;
  & > li {
    margin-top: 20px;
    overflow: hidden;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
