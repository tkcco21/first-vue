<template lang="html">
  <section class="books">
    <h2 class="books__title">読んだ本たち</h2>
    <p class="books__caution">※ 本のリンクはすべてアマゾンのアフィリエイトリンクになっています。</p>
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
.books {
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
