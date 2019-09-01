<template lang="html">
  <section class="book-list">
    <h2 class="book-list__title">読んだ本たち</h2>
    <p class="book-list__caution">※ 本のアマゾンのリンクはすべてアフィリエイトリンクになっています。</p>
    <app-book-list :book-list="bookList" />
  </section>
</template>

<script>
import BookList from '@Public/components/Molecules';

export default {
  components: {
    appBookList: BookList,
  },
  computed: {
    bookList() {
      return this.$store.state.bookList;
    },
  },
  created() {
    this.$store.dispatch('getAllBooks');
  },
};
</script>

<style lang="postcss" scoped>
.book-list {
  &__title {
    font-size: 24px;
    @mixin mobile {
      font-size: 20px;
    }
  }
  &__caution {
    font-size: 14px;
    color: var(--darkGray);
    @mixin mobile {
      font-size: 12px;
      line-height: 1.4;
    }
  }
}
</style>
