<template>
  <section class="book-detail">
    <app-page-title title="読んだ本の詳細" text="※ 本のリンクはアマゾンのアフィリエイトリンクになっています。" />
    <app-book-detail :book="book" />
  </section>
</template>

<script>
import { PageTitle } from '@Public/components/Molecules';
import { BookDetail } from '@Public/components/Organisms';

export default {
  components: {
    appPageTitle: PageTitle,
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
