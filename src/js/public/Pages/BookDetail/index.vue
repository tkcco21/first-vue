<template>
  <section class="book-detail">
    <app-page-title title="読んだ本の詳細" text="※ 本のリンクはアマゾンのアフィリエイトリンクになっています。" />

    <Loading v-if="isLoading" />

    <app-book-detail v-else :book="book" />
  </section>
</template>

<script>
import { Loading } from '@Public/components/_globals';
import { PageTitle } from '@Public/components/Molecules';
import { BookDetail } from '@Public/components/Organisms';

export default {
  components: {
    Loading,
    appPageTitle: PageTitle,
    appBookDetail: BookDetail,
  },
  computed: {
    isLoading() {
      return this.$store.state.generics.isLoading;
    },
    book() {
      return this.$store.state.books.book;
    },
  },
  created() {
    this.$store.dispatch('books/getBook', this.$route.params);
  },
};
</script>
