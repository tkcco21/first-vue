<template>
  <section class="book-detail">
    <h2 class="book-detail__title">読んだ本の詳細</h2>
    <p class="book-list__caution">※ 本のリンクはアマゾンのアフィリエイトリンクになっています。</p>
    <app-book-detail :book="book" />
  </section>
</template>

<script>
import BookDetail from '@Public/components/Organisms/BookDetail';

export default {
  components: {
    appBookDetail: BookDetail,
  },
  computed: {
    book() {
      return this.$store.state.book;
    },
  },
  created() {
    this.$store.dispatch('getBook', this.$route.params);
  },
};
</script>

<style lang="postcss" scoped>
.book-detail {
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
