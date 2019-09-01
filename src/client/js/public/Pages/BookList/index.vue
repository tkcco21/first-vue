<template lang="html">
  <section class="book-list">
    <app-page-title title="読んだ本たち" text="※ 本の画像部分のリンクはすべてアフィリエイトリンクになっています。" />
    <app-book-list :book-list="bookList" />
  </section>
</template>

<script>
import { PageTitle } from '@Public/components/Molecules';
import { BookList } from '@Public/components/Organisms';

export default {
  components: {
    appPageTitle: PageTitle,
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
