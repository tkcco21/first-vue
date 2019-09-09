<template lang="html">
  <section>
    <app-page-title title="読んだ本たち" text="※ 本の画像部分のリンクはすべてアフィリエイトリンクになっています。" />

    <ul class="book-list">
      <app-yearly-books
        v-for="(yearly, yearIndex) in bookList"
        :key="yearIndex"
        :yearly="yearly"
        :yearly-books-count="yearlyNumberOfBooks"
        :shown-year-array="shownYearArray"
        @toggleCount="toggleCount"
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
  data() {
    return {
      shownYearArray: [],
    };
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
  methods: {
    toggleCount(targetYear) {
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
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
